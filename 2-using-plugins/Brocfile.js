var jadeify = require('broccoli-jade');

var app = 'app';

app = jadeify(app);

module.exports = app;
