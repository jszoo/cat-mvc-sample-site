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
    eventArg.inject['mongo'] = 'mongoContext';
});

// custom model binder
app.on('init', function() {
    var customBinder = function() {
        this.bindModel = function(controllerContext, bindingContext) {
            bindingContext.value.test = 1;
            return bindingContext.value;
        };
    };
    var customBinderAttribute = function(paramName) {
        this.getParamName = function() { return paramName; };
        this.getBinder = function() { return new customBinder(); }
    };
    app.attributes.register('customBinder', customBinderAttribute);

    //
    app.filters.add({
        onAuthorization: function(authorizationContext) {
            console.log('global filter');
        }
    });
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
