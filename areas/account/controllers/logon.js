/*
* logon
* author: ruleechen
* contact: rulee@live.cn
* create date: 2014.6.26
*/

var mvc = require('cat-mvc');

mvc.controller(function(req, res, session, modelState, end) {

    this.action('index', function() {
        end.json({ Get: true });
    });

    this.action('index', 'httpPost', function(UserName, Password, User, ArticleId) {
        end.json({ Post: true });
    });

    this.action('admin', function() {
        if (!session.loggedin) {
            end.redirectToAction('login');
        } else {
            var count = (session.count || 0);
            session.count = (++count);
            end.view({ count: count });
        }
    });

    this.action('login', function() {
        if (session.loggedin) {
            end.redirectToAction('admin');
        } else {
            end.view({ login:'yes'});
        }
    });

    this.action('login', 'httpPost, userModel(user), customBinder(user)', function(user) {
        if (!modelState.isValid()) {
            end.view();
            return;
        }
        if (user.UserName === 'admin' && user.Password === 'admin') {
            session.loggedin = true;
            end.redirectToAction('admin');
        } else {
            end.redirectToAction('login');
        }
    });

    this.action('logout', function() {
        session.destroy();
        end.redirectToAction('login');
    });

});