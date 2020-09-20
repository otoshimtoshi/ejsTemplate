const gulp = require('gulp');
const DIR = require('../conf').DIR;
const browserSync = require('browser-sync');

// ==========================================================================
// gulp.watcで対象ファイルを監視、変更があった場合後続のタスクを実行、ブラウザのリロード
// ==========================================================================
gulp.task('watch', () => {
  gulp.watch([`./${DIR.SRC}/**/*.{scss,sass}`], gulp.series('sass', reload));
  gulp.watch([`./${DIR.SRC}/js/*.js`], gulp.series('replaceJs', reload));
  gulp.watch([`./${DIR.SRC}/**/*.json`], gulp.series(gulp.series('ejs'), 'sass', reload));
  gulp.watch([`./${DIR.SRC}/**/*.ejs`], gulp.series('ejs', reload));
});

// ==========================================================================
// browser-syncのリロード
// ==========================================================================
const reload = (done) => {
  browserSync.reload();
  done();
};
