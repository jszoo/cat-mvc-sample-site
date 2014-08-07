/*
* global
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.6.23
*/

var mvc = require('cat-mvc');
var app = mvc({ appPath: __dirname });

// inject
app.on('injectController', function(sender, eventArg) {
	eventArg.inject['mongoCtx'] = 'mongoCtx';
});

// log
var logger = require('morgan');
app.use(logger('dev', {}));

// favicon
var favicon = require('serve-favicon');
app.use(favicon(app.mapPath('~/resource/fav.ico')));

// static
var static = require('serve-static');
app.use(static(app.mapPath('~/resource')));

// server
var http = require('http');
var server = http.createServer(app.handler());

// export
module.exports = server;
