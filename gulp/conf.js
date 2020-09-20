// PATHファイル
const DIR = (module.exports.DIR = {
  PATH: '',
  SRC: 'src',
  DEST: 'dst',
  BUILD: 'docs',
});

module.exports.serve = {
  dest: {
    //tunnel: 'test',
    notify: false,
    startPath: `${DIR.PATH}/`,
    ghostMode: false,
    server: {
      baseDir: DIR.DEST,
      index: 'index.html',
      routes: {
        [DIR.PATH]: `${DIR.DEST}/`,
      },
    },
    https: true,
  },
  build: {
    //tunnel: 'test',
    notify: false,
    startPath: `${DIR.PATH}/`,
    ghostMode: false,
    server: {
      baseDir: DIR.BUILD,
      index: 'index.html',
      routes: {
        [DIR.PATH]: `${DIR.BUILD}/`,
      },
    },
    https: true,
  },
};

module.exports.sass = {
  src: [`${DIR.SRC}/sass/*.{sass,scss}`, `!${DIR.SRC}/sass/_**/*.{sass,scss}`, `!${DIR.SRC}/sass/_*.{sass,scss}`],
  dest: `${DIR.DEST}/css`,
};

module.exports.replace = {
  js: {
    src: [`${DIR.SRC}/js/*.js`],
    dest: `${DIR.DEST}/js`,
    build: `${DIR.BUILD}/js`,
    path: `${DIR.PATH}`,
  },
  plugin: {
    src: [`${DIR.SRC}/plugin/*/*.*`],
    dest: `${DIR.DEST}/plugin`,
    path: `${DIR.PATH}`,
  },
  image: {
    src: [`${DIR.SRC}/img/*.*`],
    dest: `${DIR.DEST}/img`,
    path: `${DIR.PATH}`,
  },
};

module.exports.cleanCss = {
  src: `${DIR.DEST}/css/main.css`,
  dest: `${DIR.BUILD}/css`,
};

module.exports.del = {
  dest: {
    path: [`${DIR.DEST}`],
  },
  build: {
    path: [`${DIR.BUILD}`],
  },
};
