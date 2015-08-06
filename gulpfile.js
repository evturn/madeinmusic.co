var gulp = require('gulp'),
    gutil = require('gulp-util'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create(),
    paths = require('./config/gulp-paths'),
    options = require('./config/gulp-options');



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