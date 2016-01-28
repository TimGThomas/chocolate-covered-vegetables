var browserify         = require('broccoli-browserify'),
    babel              = require('broccoli-babel-transpiler'),
    BroccoliSass       = require('broccoli-sass'),
    BroccoliMergeTrees = require('broccoli-merge-trees'),
    BrowserSync        = require('broccoli-browser-sync');

// Scripts
var scripts = 'app';
scripts = babel(scripts, {});
scripts = browserify(scripts, {
  entries: [ './app.js' ],
  outputFile: 'app.js'
});

// Styles
var styles = 'app/styles';
styles = new BroccoliSass([ styles ], 'app.scss', 'app.css');

var browserSync = new BrowserSync([ 'public', scripts, styles ]);

module.exports = new BroccoliMergeTrees([ 'public', scripts, styles, browserSync ]);
