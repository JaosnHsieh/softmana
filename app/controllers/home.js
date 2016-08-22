var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/login', function (req, res, next) {
  
  req.session.login = true;

  res.redirect('/');

});

router.get('/',function (req, res, next) {
   db.Menu.removeAttribute('id'); 

  db.Menu.findAll().then(function (data) {
    res.render('index',{
      menu:data
    });
    
  });

});
  

function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.session.login)
        return next();

    // if they aren't redirect them to the home page
    res.send("<a href='./login'>請登入</a>");
}  