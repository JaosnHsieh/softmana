var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/api', router);
};

router.get('/', function (req, res, next) {
  db.Soft_Data.removeAttribute('id'); // don't want an "id" column for this table

  db.Soft_Data.findAll().then(function (data) {
    
    res.json(data);
    
  });
});
 