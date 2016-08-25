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
  

  db.def_Option.findAll({
    where:{
       Table_Name:tableName,
       Col_Name:colName
         }
         //,order: '"Option_Value" DESC'
  }).then(function(data){
      res.json(data);
  });
});


router.get('/softName',function(req,res,next){

  db.Soft_Name.findAll({
    //order: '"Soft_Name" ASC'
  }).then(function(data){
      res.json(data);
  });

});


router.get('/tbDep',function(req,res,next){
  
  db.tb_DEP.findAll({
    // order: '"DEP_NO" ASC'
  }).then(function(data){
      res.json(data);
  });


  
});


router.get('/adViewSSO',function(req,res,next){

    db.ad_view_SSO.removeAttribute('id');

  db.ad_view_SSO.findAll({
    // order: '"DEP_NO" ASC'
    where : { department: req.query.department }
  }).then(function(data){
    console.log(data);
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