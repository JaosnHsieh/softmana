var express = require('express'),
  router = express.Router(),
  db = require('../models'),
  comm = require('../utility/comm'),
  moment = require('moment'),
  util = require('util');


module.exports = function (app) {
  app.use('/api', router);
};


router.get('/softData', function (req, res, next) {
  db.Soft_Data.removeAttribute('id'); // don't want an "id" column for this table

  if(req.query.recordInNo){

    db.Soft_Data.findAll({
      where : { RECORD_IN_NO:  req.query.recordInNo }
    })
      
      .then(function(data){

          res.json(data);
    });
  
}

  else{
        db.Soft_Data.findAll({
    // attributes: ['SOFT_NAME', 'STATUS_TYPE'],
          where:{ STATUS_TYPE:1 , 
                  SOFT_OWN_USER: {$like: '%蕭%'  }
                },
          order: '"CREATE_DATE" DESC'
        }).then(function (data) {
          
          res.json(data);
          
        });
  }
  

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




//// softData post start
router.post('/softData',function(req,res){
  


  // // input validator start 輸入資料驗證
  
  // req.checkBody('data.SOFT_NAME', 'Not Empty').notEmpty();
  // req.checkBody('data.SOFT_PRODUCT_VERSION', '產品版本為空').notEmpty();
  // // ..... 還沒寫完全部要驗證的 因為還沒確定要驗證哪些欄位
  //  var errors = req.validationErrors();
  //  console.log('errors : ', errors);
  // if (errors) {
  //   res.status(400).send(errors);
  //   return;
  // }

  // // input validator end 輸入資料驗證 

  var soft_data = db.Soft_Data.build();


  ////save start
  var data = req.body.data;

  db.Soft_Data.max('RECORD_IN_NO').then(function(max){
    
    soft_data.RECORD_IN_NO = max+1; //

    comm.getFormNum('S',function(TNO){
      global.TNO = TNO;
      global.RECORD_IN_NO = soft_data.RECORD_IN_NO;
      soft_data.SNO = TNO;
      soft_data.SOFT_BATCH_NUM = '';
      soft_data.STATUS_TYPE = '0';
      soft_data.SOFT_USE_TYPE = data.SOFT_USE_TYPE || '';
      soft_data.SOFT_NAME = data.SOFT_NAME || '';
      soft_data.SOFT_PRODUCT_VERSION = data.SOFT_PRODUCT_VERSION || '';
      soft_data.SOFT_SERIAL_NUMBER = data.SOFT_SERIAL_NUMBER || '';
      soft_data.SOFT_FUNCTION_TYPE = data.SOFT_FUNCTION_TYPE || '';
      soft_data.SOFT_PRODUCT_TYPE = data.SOFT_PRODUCT_TYPE || '';
      soft_data.SOFT_USING_COUNT = data.SOFT_USING_COUNT || '';
      soft_data.SOFT_ENVIRONMENT = data.SOFT_ENVIRONMENT || '';
      soft_data.SOFT_AVALIBLE_COUNT = data.SOFT_AVALIBLE_COUNT || '';
      soft_data.SOFT_SOURCE_TYPE = data.SOFT_SOURCE_TYPE || '';
      soft_data.SOFT_SOURCE_TYPE_OTHER = data.SOFT_SOURCE_TYPE_OTHER || '';
      soft_data.SOFT_SOURCE_DEP  =  data.SOFT_SOURCE_DEP || '';
      soft_data.SOFT_STORE_MEDIA  =  data.SOFT_STORE_MEDIA || '';
      soft_data.SOFT_STORE_MEDIA_COUNT  =  data.SOFT_STORE_MEDIA_COUNT || '';
      soft_data.SOFT_DOCUMENT  =  data.SOFT_DOCUMEN || '';
      soft_data.SOFT_TOTAL_COST  =  data.SOFT_TOTAL_COST || '';
      soft_data.SOFT_RENT_COST  =  data.SOFT_RENT_COST || '';
      soft_data.SOFT_START_DATE  =  data.SOFT_START_DATE || '';
      soft_data.SOFT_COMMENT  =  data.SOFT_COMMENT || '';
      soft_data.SOFT_OWN_DEP  =  data.SOFT_OWN_DEP || '';
      soft_data.SOFT_OWN_DEPNO = data.SOFT_OWN_DEPNO || '';
      soft_data.SOFT_OWN_USER  =  data.SOFT_OWN_USER || '';
      var now = moment().format('YYYY-MM-DD HH:mm:ss.SSS');
      soft_data.CREATE_DATE  =  now;
      soft_data.UPDATE_DATE  =  now;
      soft_data.SOFT_APPLICATION_DEP  =  'testtesttest';
      soft_data.SOFT_APP_DEPNO  =  '111111111111';
      soft_data.SOFT_APPLICATION_USER  =  'testtest';
      soft_data.SOFT_APP_USERNO  =  '1111111111111';

      soft_data.save()
      .then(function(savedOne){
        console.log('insert soft_data successfully');
        res.status(200).json({RECORD_IN_NO:savedOne.RECORD_IN_NO});
      })
      .catch(function(err){
        console.log('err happen ',err);
        res.status(404).send('insert soft_data error');
      });

    });
    
    

  });

  //// save done.
  


});//// softData post done


router.post('/softChange',function(req,res){

    var data = req.body.data;
    var soft_change = db.Soft_Change.build();

        soft_change.Soft_ID = global.RECORD_IN_NO;
        soft_change.APPLICATION_DATE = data.SOFT_START_DATE;
        soft_change.SOFT_OWN_DEP = data.SOFT_OWN_DEP;
        soft_change.SOFT_OWN_USER = data.SOFT_OWN_USER;
        soft_change.SOFT_USING_DEP = data.SOFT_APPLICATION_DEP;
        soft_change.SOFT_USING_USER = data.SOFT_APPLICATION_USER;
        soft_change.SOFT_NOW_PRODUCT_VERSION = data.SOFT_PRODUCT_VERSION;
        soft_change.SOFT_NOW_TOTAL = data.SOFT_TOTAL_COST;
        soft_change.AMT = data.SOFT_AVALIBLE_COUNT;
        soft_change.SOURCE = data.SOFT_SOURCE_DEP;
        soft_change.UPDATE_DATE = moment().format('YYYY-MM-DD HH:mm:ss.SSS');
    
    soft_change.save()
    .then(function(data){
      res.status(200).send('soft_change inserted successfully');
    })
    .catch(function(err){
      console.log('err',err);
    });

});

router.get('/getCurrentTNO',function(req,res){
  res.json({TNO:global.TNO});
});


//soft apply

router.get('/softApply',function(req,res){
      var idNo = req.query.entry;

      db.Soft_Apply.findOne({
        where : { IDNo : idNo}
      })
      .then(function(data){
          res.json(data);         
      });

});


router.post('/softApply',function(req,res){
   
    var softApplyForSave = db.Soft_Apply.build();

    var softApply = req.body.softApply;
    var softData = req.body.softData;

      softApplyForSave.FType = 4;
      comm.getFormNum('F',function(TNO){
          
      softApplyForSave.FNO = TNO;
      softApplyForSave.OWN_DEP = softData.SOFT_OWN_DEP;
      softApplyForSave.OWN_USER = softData.SOFT_OWN_USER;
      softApplyForSave.USING_DEP = softData.SOFT_APPLICATION_DEP;
      softApplyForSave.USING_USER = softData.SOFT_APPLICATION_USER;
      softApplyForSave.Version = softApply.Version;
      softApplyForSave.Cost = softApply.Cost;
      softApplyForSave.AMT = softApply.AMT;
      softApplyForSave.Source = softApply.Source;
      softApplyForSave.Memo = softApply.Memo;
      softApplyForSave.Status = 10;
      softApplyForSave.Creat_User = 'test'; 
      softApplyForSave.Creat_UName = 'test';
      softApplyForSave.Creat_DEP = 'test';

      });


    softApplyForSave.save()
    .then(function(data){
      res.status(200).json(data);
    })
    .catch(function(err){
      console.log('err',err);
    });
});

router.get('/TransPrn1Ctrl',function(req,res){

      db.Soft_Apply_Soft.findOne({
        where : { Apply_ID : req.query.entry }
      })
        .then(function(data){
            
            db.Soft_Data.findOne({
              where : { RECORD_IN_NO: data.Soft_ID }
            }).then(function(data2){
                
                data2.dataValues.SS = data2.SNO==null?data2.SOFT_BATCH_NUM:data2.SNO; 

                  db.sequelize.query("Select Sum(Cast(replace(replace(SOFT_NOW_TOTAL,'.00',''),',','') as int)) as pay from Soft_Change where ISNUMERIC(SOFT_NOW_TOTAL)=1 and Soft_ID=419 and APP_TYPE in (1,4)", { type: db.sequelize.QueryTypes.SELECT})
                    .then(function(data3) {
                                        
                            db.Soft_Apply.findOne({
                               where : { IDNo: req.query.entry }
                            }).then(function(data4){

                                var thisAMT = data4.status==20?0:data4.Cost;
                                res.json({data2:data2,data3:data3[0],thisAMT:thisAMT,serverDate:moment().format('YYYY-MM-DD HH:mm:ss.SSS')}); 
                            
                          });
                                        

                    });
            });
         
        });
});
//soft apply end







function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.session.login)
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}