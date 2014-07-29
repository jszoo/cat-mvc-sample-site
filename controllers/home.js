/*
* home
* author: ronglin
* create date: 2014.6.30
*/

var mvc = require('zoo-mvc');

mvc.controller(function(req, res, end, tempdata, viewdata, session) {

    this.action('index', function() {

        //
        viewdata['title'] = 'ZooSite';

        //
        setTimeout(function() {
            end.view();
        }, 1);
    });

});