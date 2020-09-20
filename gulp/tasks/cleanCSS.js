const gulp = require('gulp');
const $ = require('../plugins');
const conf = require('../conf').cleanCss;

// ==========================================================================
// CSS圧縮用　buildのみ使用
// ==========================================================================
gulp.task('cleanCss', () => {
  return (
    gulp
      .src(conf.src)
      .pipe($.cleanCss())
      // .pipe($.rename({ suffix: ".min" }))
      .pipe(gulp.dest(conf.dest))
  );
});
