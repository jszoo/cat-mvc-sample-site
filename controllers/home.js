/*
* home
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.6.30
*/

var mvc = require('cat-mvc');

mvc.controller(function(req, res, end, tempdata, viewdata, session) {

    this.action('index', function() {

        //
        viewdata['title'] = 'cat-mvc';

        //
        setTimeout(function() {
            end.view();
        }, 1);
    });

});