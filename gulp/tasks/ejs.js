const gulp = require('gulp');
const $ = require('../plugins');
const DIR = require('../conf').DIR;
var fs = require('fs');
const ejs = require('gulp-ejs');

// ==========================================================================
// /html の.ejsファイルに/component の.ejsファイルを読み込み用 devのみ使用
// ==========================================================================
gulp.task('ejs', function (done) {
  for (var key in json.pages) {
    var pageData = json.pages[key];
    // data.jsonの取得内容の出力
    console.log('-data.json-----------------data.json-----------------data.json----------------');
    console.log(pageData);
    console.log('-data.json-----------------data.json-----------------data.json----------------');
    gulp
      .src(`./${DIR.SRC}/html/${pageData.id}.ejs`)
      .pipe(ejs({ pageData }))
      .pipe($.rename(`${pageData.id}.html`))
      .pipe(gulp.dest(`./${DIR.DEST}`));
  }
  done();
});

// ==========================================================================
// /html の.ejsファイルに/component の.ejsファイルを読み込み用 buildのみ使用
// ==========================================================================
gulp.task('replacehtml', function (done) {
  for (var key in json.pages) {
    var pageData = json.pages[key];
    // data.jsonの取得内容の出力
    console.log('-data.json-----------------data.json-----------------data.json----------------');
    console.log(pageData);
    console.log('-data.json-----------------data.json-----------------data.json----------------');
    gulp
      .src(`./${DIR.SRC}/html/${pageData.id}.ejs`)
      .pipe(ejs({ pageData }))
      .pipe($.rename(`${pageData.id}.html`))
      .pipe(gulp.dest(`./${DIR.BUILD}`));
  }
  done();
});
// ==========================================================================
// data.jsonを読み込み
// ==========================================================================
const json = JSON.parse(fs.readFileSync(`./${DIR.SRC}/data.json`));
