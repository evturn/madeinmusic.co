var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create(),
    paths = require('./config/gulp-paths'),
    options = require('./config/gulp-options');



gulp.task('css', function() {
  return gulp.src(paths.css.src)
    .pipe($.plumber(options.plumber))
    .pipe($.concat(paths.css.filename))
    .pipe($.cssmin())
    .pipe($.rename(paths.css.filename))
    .pipe(gulp.dest(paths.css.dest));
});