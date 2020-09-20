const gulp = require('gulp');
const $ = require('../plugins');
const conf = require('../conf').replace;

// ==========================================================================
// JS移動用
// ==========================================================================
gulp.task('replaceJs', () => {
  if (process.env.NODE_ENV === 'development') {
    return gulp.src(conf.js.src).pipe(gulp.dest(conf.js.dest));
  } else {
    return gulp.src(conf.src).pipe(gulp.dest(conf.js.build));
  }
});
// ==========================================================================
// slick関連の移動用
// ==========================================================================
gulp.task('replaceSlick', () => {
  return gulp.src(conf.plugin.src).pipe(gulp.dest(conf.plugin.dest));
});
// ==========================================================================
// image移動用
// ==========================================================================
gulp.task('replaceImage', () => {
  return gulp.src(conf.image.src).pipe(gulp.dest(conf.image.dest));
});
