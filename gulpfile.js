const gulp = require('gulp');
const requireDir = require('require-dir');
requireDir('./gulp/tasks');

// ==========================================================================
// npm run dev => Perform the following tasks
// ==========================================================================
gulp.task('default', gulp.series('delDest', gulp.parallel('ejs', 'sass', 'replaceSlick', 'replaceImage', 'replaceJs'), gulp.parallel('serve', 'watch')));

// ==========================================================================
// npm run build => Perform the following tasks
// ==========================================================================
gulp.task('build', gulp.series('delBuild', gulp.parallel('replacehtml', 'sass', 'replaceJs'), 'cleanCss'));
