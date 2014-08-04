/*
* home
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.7.1
*/

var mvc = require('cat-mvc');

mvc.controller(function(req, res, end) {

    this.action('index', function() {
        return this.redirectToAction('test','home', { id: 1 });
    });

    this.action('test', 'int(id)', function(id) {
        end.view({ id: id, idType: (typeof(id)) });
    });

});