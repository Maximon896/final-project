const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const replace = require('gulp-replace');

const paths = {
  html: {
    src: 'src/**/*.html',
    dest: 'dist/'
  },
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css/'
  },
};

// HTML
function html() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
}

// SCSS
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(replace(/url\(["']?\/images\//g, 'url("../images/'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// Watch + LiveReload
function watch() {
  browserSync.init({
    server: {
      baseDir: 'dist/'
    },
    notify: false,
    open: true
  });

  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.html.src, html);
}

exports.default = gulp.series(gulp.parallel(html, styles), watch);
