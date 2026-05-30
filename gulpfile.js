// GULP MODULES ===============================================================
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minifyCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const connect = require('gulp-connect');
const less = require('gulp-less');
const jshint = require('gulp-jshint');
const foreach = require('gulp-foreach');
const zip = require('gulp-zip');
const { packager } = require('@electron/packager');
const templateCache = require('gulp-angular-templatecache');
const replace = require('gulp-replace');
const stylish = require('jshint-stylish');
const { exec } = require('child_process');
const fs = require('fs');
const rimraf = require('rimraf');
const merge = require('merge-stream');

// VARIABLES ==================================================================
const project = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const build_version = project.version;
const build_date = (new Date()).toISOString().replace(/T.*/, '');

// FILES ======================================================================
const vendor_js = [
  'src/assets/libs/createjs.min.js',
  'src/assets/libs/creatine-1.0.0.min.js',
  'src/assets/libs/behavior3js-0.1.0.min.js',
  'src/assets/libs/mousetrap.min.js',
  'bower_components/angular/angular.min.js',
  'bower_components/angular-animate/angular-animate.min.js',
  'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
  'bower_components/angular-ui-router/release/angular-ui-router.min.js',
  'bower_components/sweetalert/dist/sweetalert.min.js',
];
const vendor_css = [
  'bower_components/bootstrap/dist/css/bootstrap.min.css',
  'bower_components/sweetalert/dist/sweetalert.css',
];
const vendor_fonts = [
  'bower_components/fontawesome/fonts/*',
  'src/assets/fonts/**/*',
];

const preload_js = [
  'src/assets/js/preload.js',
];

const preload_css = [
  'bower_components/fontawesome/css/font-awesome.min.css',
  'src/assets/css/preload.css',
];

const app_js = [
  'src/editor/namespaces.js',
  'src/editor/utils/*.js',
  'src/editor/**/*.js',
  'src/app/app.js',
  'src/app/app.routes.js',
  'src/app/app.controller.js',
  'src/app/**/*.js',
  'src/start.js',
];
const app_less = [
  'src/assets/less/index.less',
];
const app_imgs = [
  'src/assets/imgs/**/*',
];
const app_html = [
  'src/app/**/*.html',
];
const app_entry = [
  'src/index.html',
  'src/package.json',
  'src/desktop.js',
];

// TASKS (VENDOR) =============================================================
function vendor_js_task() {
  return gulp.src(vendor_js)
    .pipe(uglify())
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('build/js'));
}

function vendor_css_task() {
  return gulp.src(vendor_css)
    .pipe(minifyCSS())
    .pipe(concat('vendor.min.css'))
    .pipe(gulp.dest('build/css'));
}

function vendor_fonts_task() {
  return gulp.src(vendor_fonts)
    .pipe(gulp.dest('build/fonts'));
}

// TASKS (PRELOAD) ============================================================
function preload_js_task() {
  return gulp.src(preload_js)
    .pipe(uglify())
    .pipe(concat('preload.min.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(connect.reload());
}

function preload_css_task() {
  return gulp.src(preload_css)
    .pipe(minifyCSS())
    .pipe(concat('preload.min.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(connect.reload());
}

// TASKS (APP) ================================================================
function app_js_dev_task() {
  return gulp.src(app_js)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(replace('[BUILD_VERSION]', build_version))
    .pipe(replace('[BUILD_DATE]', build_date))
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(connect.reload());
}

function app_js_build_task() {
  return gulp.src(app_js)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(replace('[BUILD_VERSION]', build_version))
    .pipe(replace('[BUILD_DATE]', build_date))
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('build/js'))
    .pipe(connect.reload());
}

function app_less_task() {
  return gulp.src(app_less)
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(connect.reload());
}

function app_imgs_task() {
  return gulp.src(app_imgs)
    .pipe(gulp.dest('build/imgs'));
}

function app_html_task() {
  return gulp.src(app_html)
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true, keepClosingSlash: true }))
    .pipe(replace('[BUILD_VERSION]', build_version))
    .pipe(replace('[BUILD_DATE]', build_date))
    .pipe(templateCache('templates.min.js', {
      standalone: true,
      transformUrl: function(url) { return url.replace(/^[\/\\]+/, ''); }
    }))
    .pipe(gulp.dest('build/js'))
    .pipe(connect.reload());
}

function app_entry_task() {
  return gulp.src(app_entry)
    .pipe(replace('[BUILD_VERSION]', build_version))
    .pipe(replace('[BUILD_DATE]', build_date))
    .pipe(gulp.dest('build'))
    .pipe(connect.reload());
}

// TASKS (LIVE RELOAD) ========================================================
function livereload_task() {
  connect.server({
    livereload: true,
    root: 'build',
    port: 8000,
  });
}

function watch_task() {
  gulp.watch(preload_js, preload_js_task);
  gulp.watch(preload_css, preload_css_task);
  gulp.watch(app_js, app_js_dev_task);
  gulp.watch(app_less, app_less_task);
  gulp.watch(app_html, app_html_task);
  gulp.watch(app_entry, app_entry_task);
}

// TASKS (INSTALL BUILD DEPS) =================================================
function install_build_deps() {
  return gulp.src('node_modules/@electron/remote/**/*', { base: 'node_modules' })
    .pipe(gulp.dest('build/node_modules'));
}

// TASKS (ELECTRON) ===========================================================
function electron_task() {
  return packager({
    dir: 'build',
    out: require('path').join(__dirname, 'dist'),
    name: project.name,
    platform: 'win32',
    arch: 'x64',
    overwrite: true,
    asar: false,
    tmpdir: require('os').tmpdir()
  });
}

function electron_zip_task(cb) {
  cb();
}

// COMMANDS ===================================================================
gulp.task('build', gulp.series(
  gulp.parallel(vendor_js_task, vendor_css_task, vendor_fonts_task),
  gulp.parallel(preload_js_task, preload_css_task),
  gulp.parallel(app_js_build_task, app_less_task, app_imgs_task, app_html_task, app_entry_task)
));

gulp.task('dev', gulp.series(
  gulp.parallel(vendor_js_task, vendor_css_task, vendor_fonts_task),
  gulp.parallel(preload_js_task, preload_css_task),
  gulp.parallel(app_js_dev_task, app_less_task, app_imgs_task, app_html_task, app_entry_task)
));

gulp.task('serve', gulp.series(
  gulp.parallel(vendor_js_task, vendor_css_task, vendor_fonts_task),
  gulp.parallel(preload_js_task, preload_css_task),
  gulp.parallel(app_js_dev_task, app_less_task, app_imgs_task, app_html_task, app_entry_task),
  livereload_task,
  watch_task
));

gulp.task('dist', gulp.series('build', install_build_deps, electron_task, electron_zip_task));
