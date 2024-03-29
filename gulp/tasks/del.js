const gulp = require('gulp');
const conf = require('../conf').del;
const del = require('del');

// ==========================================================================
// dstディレクトリの削除用 devのみ使用
// ==========================================================================
gulp.task('delDest', (cb) => {
  del(conf.dest.path).then(() => {
    cb();
  });
});

// ==========================================================================
// docsディレクトリの削除用　buildのみ使用
// ==========================================================================
gulp.task('delBuild', (cb) => {
  del(conf.build.path).then(() => {
    cb();
  });
});
