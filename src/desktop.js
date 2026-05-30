const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

// 日志模块
const logFile = path.join(app.getPath('userData'), 'behavior3editor.log');

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

  const indexPath = path.join(__dirname, 'index.html');
  log('INFO', `Loading: ${indexPath}`);
  mainWindow.loadFile(indexPath);

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
});

process.on('uncaughtException', function (err) {
  log('ERROR', `Uncaught exception: ${err.message}\n${err.stack}`);
});
