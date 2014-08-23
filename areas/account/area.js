/*
* area
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.8.1
*/

'use strict';

var mvc = require('cat-mvc');

mvc.area(function() {

    this.onRegister = function(area) {
        area.routes.register(
            'account1',
            ('/' + area.name + '/:action?/:controller?/:articleId?'),
            ({ controller: 'home', action: 'index' })
        );
    };

    this.onUnload = function(area) {
    };

    this.onInjectController = function(area, injectContext) {
    	injectContext.inject['mongo1'] = 'mongoContext1';
    };

});
