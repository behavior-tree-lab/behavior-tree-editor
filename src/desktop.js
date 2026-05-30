const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

app.disableHardwareAcceleration();

// 日志模块 - 输出到程序目录下的 logs/
const appDir = path.dirname(process.execPath);
const logDir = path.join(appDir, 'logs');
if (!fs.existsSync(logDir)) { fs.mkdirSync(logDir, { recursive: true }); }
const logFile = path.join(logDir, 'behavior3editor.log');

function log(level, msg) {
  const timestamp = new Date().toISOString();
  const line = `[${timestamp}] [${level}] ${msg}`;
  console.log(line);
  try {
    fs.appendFileSync(logFile, line + '\n');
  } catch (e) {}
}

log('INFO', `App starting, version=${app.getVersion()}, electron=${process.versions.electron}`);
log('INFO', `Log file: ${logFile}`);
log('INFO', `User data: ${app.getPath('userData')}`);

let mainWindow = null;

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    log('INFO', 'All windows closed, quitting');
    app.quit();
  }
});

app.on('ready', function () {
  log('INFO', 'App ready, creating window');

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Enable @electron/remote for this window
  require('@electron/remote/main').initialize();
  require('@electron/remote/main').enable(mainWindow.webContents);

  const indexPath = path.join(__dirname, 'index.html');
  log('INFO', `Loading: ${indexPath}`);
  mainWindow.loadFile(indexPath);
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    log('INFO', 'Main window closed');
    mainWindow = null;
  });

  mainWindow.webContents.on('did-finish-load', function () {
    log('INFO', 'Page loaded successfully');
  });

  mainWindow.webContents.on('did-fail-load', function (event, code, desc) {
    log('ERROR', `Page load failed: ${code} ${desc}`);
  });

  // Capture all console messages from renderer to log file
  mainWindow.webContents.on('console-message', function (event, level, message, line, sourceId) {
    var levels = ['DEBUG', 'INFO', 'WARN', 'ERROR'];
    var lvl = levels[level] || 'INFO';
    log(lvl, `[renderer:${line}] ${message}`);
  });
});

process.on('uncaughtException', function (err) {
  log('ERROR', `Uncaught exception: ${err.message}\n${err.stack}`);
});
