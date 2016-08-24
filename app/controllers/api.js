var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/api',isLoggedIn, router);
};

router.get('/softData', function (req, res, next) {
  db.Soft_Data.removeAttribute('id'); // don't want an "id" column for this table


  db.Soft_Data.findAll({
    // attributes: ['SOFT_NAME', 'STATUS_TYPE'],
    where:{ STATUS_TYPE:1 , 
            SOFT_OWN_USER: {$like: '%蕭%'  }
          },
    order: '"CREATE_DATE" DESC'
  }).then(function (data) {
    
    res.json(data);
    
  });
});

router.put('/softData', function (req, res, next) {
    
        var obj = req.body.data;
        
        // search for attributes
        db.Soft_Data.findOne({ where: {IDNo: obj.IDNo} }).then(function(data) {
        // project will be the first entry of the Projects table with the title 'aProject' || null
        data.updateAttributes(obj).then(function(todo) {
                        res.json(todo);
                        console.log('update successfully');
                      });

          });
      
    
});


router.delete('/softData', function (req, res, next) {
    
        var obj = req.body.data;
        
        // search for attributes
        db.Soft_Data.destroy({ where: {IDNo: obj.IDNo} }).then(function(data) {
          res.send('delete succesffully');
        // // project will be the first entry of the Projects table with the title 'aProject' || null
        // data.updateAttributes(obj).then(function(todo) {
        //                 res.json(todo);
        //                 console.log('update successfully');
        //               });

          });
      
    
});





router.get('/menu', function (req, res, next) {
  db.Menu.removeAttribute('id'); // don't want an "id" column for this table

  db.Menu.findAll().then(function (data) {
    
    res.json(data);
    
  });
});




router.get('/defOption',function(req,res){
  db.def_Option.removeAttribute('id');

  var tableName = req.query.tableName;
  var colName = req.query.colName;
  
  console.log(tableName);

  db.def_Option.findAll({
    where:{
       Table_Name:tableName,
       Col_Name:colName
         },
    order: '"Option_Value" DESC'
  }).then(function(data){
      res.json(data);
  });
});














function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.session.login)
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}