var gulp = require('gulp'),
    gutil = require('gulp-util'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create(),
    paths = require('./config/gulp-paths'),
    options = require('./config/gulp-options');


gulp.task('default', ['nodemon', 'less', 'lint', 'watch'], function() {
  browserSync.init(options.browserSync);
});

gulp.task('build', ['less', 'css', 'js', 'js:vendor', 'css:vendor']);

gulp.task('watch', function() {
  gulp.watch(paths.less.watch, ['reloader']);
  gulp.watch(paths.jshint.watch, ['lint']);
  gulp.watch(paths.js.watch, ['reloader']);
  gulp.watch(paths.views.src, ['reloader']);
});


gulp.task('less', function() {
  return gulp.src(paths.less.src)
    .pipe($.plumber(options.plumber))
    .pipe($.less())
    .pipe($.rename(paths.less.filename))
    .on('error', options.plumber.errorHandler)
    .pipe($.autoprefixer(options.autoprefixer))
    .pipe(gulp.dest(paths.less.dest))
    .pipe($.cssmin())
    .pipe($.rename(paths.less.min))
    .pipe(gulp.dest(paths.less.dest)).on('error', gutil.log);
});

gulp.task('css', function() {
  return gulp.src(paths.css.src)
    .pipe($.plumber(options.plumber))
    .pipe($.concat(paths.css.filename))
    .pipe(gulp.dest(paths.css.dest))
    .pipe($.cssmin())
    .pipe($.rename(paths.css.min))
    .pipe(gulp.dest(paths.css.dest));
});

gulp.task('css:vendor', function() {
    return gulp.src(paths.css.vendor.src)
    .pipe($.plumber(options.plumber))
    .pipe($.concat(paths.css.vendor.filename))
    .pipe(gulp.dest(paths.css.dest))
    .pipe($.cssmin())
    .pipe($.rename(paths.css.vendor.min))
    .pipe(gulp.dest(paths.css.dest));
});

gulp.task('js', function() {
  return gulp.src(paths.js.src)
    .pipe($.plumber(options.plumber))
    .pipe($.concat(paths.js.filename))
    .pipe(gulp.dest(paths.js.dest))
    .pipe($.uglify())
    .pipe($.rename(paths.js.min))
    .pipe(gulp.dest(paths.js.dest))
    .on('error', gutil.log);
});

gulp.task('js:vendor', function() {
  return gulp.src(paths.js.vendor.src)
    .pipe($.plumber(options.plumber))
    .pipe($.concat(paths.js.vendor.filename))
    .pipe(gulp.dest(paths.js.vendor.dest))
    .pipe($.uglify())
    .pipe($.rename(paths.js.vendor.min))
    .pipe(gulp.dest(paths.js.vendor.dest))
    .on('error', gutil.log);
});

gulp.task('lint', function() {
  gulp.src(paths.jshint.src)
    .pipe($.plumber(options.plumber))
    .pipe($.jshint())
    .pipe($.notify(options.notify.jshint));
});

gulp.task('img', function() {
  return gulp.src(paths.img.src)
  .pipe($.imagemin(options.imagemin))
  .pipe(gulp.dest(paths.img.dest));
});

gulp.task('reloader', ['js', 'less'], function() {
  browserSync.reload();
});

gulp.task('nodemon', function() {
  $.nodemon(options.nodemon);
});

gulp.task('browsersync', function() {
  browserSync.init(options.browserSync);
});
