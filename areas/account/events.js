/*
* area events
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.6.28
*/

'use strict';

module.exports = {

    onRegister: function(area) {
        area.routes.set(
            'account1',
            ('/' + area.name + '/:action?/:controller?/:articleId?'),
            ({ controller: 'home', action: 'index' })
        );
    },

    onUnload: function(area) {
    }
};