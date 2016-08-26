var express = require('express'),
  router = express.Router(),
  db = require('../models'),
  comm = require('../utility/comm'),
  moment = require('moment');

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
      res.json(data);
  });
  
});





router.post('/test',function(req,res){
  
  var data = req.body.data;

  console.log(data);

  var soft_data = db.Soft_Data.build();
  db.Soft_Data.max('RECORD_IN_NO').then(function(max){
    
    soft_data.RECORD_IN_NO = max+1;
    
    comm.getFormNum('S',function(TNO){

      soft_data.SNO = TNO;
      soft_data.SOFT_BATCH_NUM = '';
      soft_data.STATUS_TYPE = '0';
      soft_data.SOFT_USE_TYPE = data.diff;
      soft_data.SOFT_NAME = data.names;
      soft_data.SOFT_PRODUCT_VERSION = data.version;
      soft_data.SOFT_SERIAL_NUMBER = data.serialNum;
      soft_data.SOFT_FUNCTION_TYPE = data.functions;
      soft_data.SOFT_PRODUCT_TYPE = data.usingVersion;
      soft_data.SOFT_USING_COUNT = data.usingNum;
      soft_data.SOFT_ENVIRONMENT = data.usingEnv;
      soft_data.SOFT_AVALIBLE_COUNT = data.numbers;
      soft_data.SOFT_SOURCE_TYPE = data.source;
      soft_data.SOFT_SOURCE_TYPE_OTHER = data.otherSource;
      soft_data.SOFT_SOURCE_DEP  =  data.sourceDep;
      soft_data.SOFT_STORE_MEDIA  =  data.softStorage;
      soft_data.SOFT_STORE_MEDIA_COUNT  =  data.storageNum;
      soft_data.SOFT_DOCUMENT  =  data.relatedNamesAndNum;
      soft_data.SOFT_TOTAL_COST  =  data.expense;
      soft_data.SOFT_RENT_COST  =  data.monthMoney;
      soft_data.SOFT_START_DATE  =  data.startDate;
      soft_data.SOFT_COMMENT  =  data.comment;
      soft_data.SOFT_OWN_DEP  =  data.manaDep;
      soft_data.SOFT_OWN_DEPNO = data.SOFT_OWN_DEPNO;
      soft_data.SOFT_OWN_USER  =  data.manager;
      var now = moment().format('YYYY-MM-DD HH:mm:ss.SSS');
      soft_data.CREATE_DATE  =  now;
      soft_data.UPDATE_DATE  =  now;
      soft_data.SOFT_APPLICATION_DEP  =  'testtesttest';
      soft_data.SOFT_APP_DEPNO  =  '111111111111';
      soft_data.SOFT_APPLICATION_USER  =  'testtest';
      soft_data.SOFT_APP_USERNO  =  '1111111111111';

      soft_data.save();

    });
    
    

  });





});













function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.session.login)
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}