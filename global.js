/*
* global
* author: ronglin
* create date: 2014.6.23
*/
var mvc = require('cat-mvc');
var app = mvc.gainApp({ appPath: __dirname });

// log
var logger = require('morgan');
app.use(logger('dev', {}));

// favicon
var favicon = require('serve-favicon');
app.use(favicon(app.mapPath('~/frontend/fav.ico')));

// static
var static = require('serve-static');
app.use(static(app.mapPath('~/frontend')));

// server
var http = require('http');
var server = http.createServer(app.handler());

// export
module.exports = server;
