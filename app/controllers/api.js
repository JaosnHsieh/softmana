var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/api', router);
};

router.get('/softData', function (req, res, next) {
  db.Soft_Data.removeAttribute('id'); // don't want an "id" column for this table

  db.Soft_Data.findAll().then(function (data) {
    
    res.json(data);
    
  });
});

router.get('/menu', function (req, res, next) {
  db.Menu.removeAttribute('id'); // don't want an "id" column for this table

  db.Menu.findAll().then(function (data) {
    
    res.json(data);
    
  });
});















function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.session.login)
        return next();

    // if they aren't redirect them to the home page
    res.send("<a href='/login'>請登入11</a>");
}