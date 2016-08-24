var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/login', function (req, res, next) {
  
  req.session.login = true;

  res.render('login');

});

router.post('/login',function(req,res,next){
  

   if(req.body.username=="admin"&&req.body.pwd==""){
     
     req.session.login = true;
     req.session.admin = true;
     res.redirect('/');
     
   }

});

router.get('/logout',function(req,res,next){

    req.session.destroy();
    res.send('<h1>登出成功!</h1> <a href="/login"> 請登入 </a> )');
    
});

router.get('/',isLoggedIn,function (req, res, next) {

        db.Menu.removeAttribute('id'); 

        var isControl = req.session.isControl? 1 : 0;

        db.Menu.findAll({where:{ IsControl:isControl }})
                      .then(function (data) {
                        req.session.menu = data;
                          res.render('soft-mana',
                            {
                              menu:data
                            });
                        });

});

router.get('/Soft/Soft_Mana.aspx',isLoggedIn,function(req,res,next){


  res.render('soft-mana',
              {
                menu:req.session.menu    
              }
            );

});

router.get('/Soft/Soft_Add.aspx',isLoggedIn,function(req,res,next){

  res.render('soft-add',
                {
                  menu:req.session.menu    
                }
              );


});


  
router.get('/logout.aspx',function(req,res){

   req.session.destroy();
    res.send('<h1>登出成功!</h1> <a href="/login"> 請登入 </a> )');

});

router.get('*',function(rqe,res){
  res.redirect('/');
});



function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.session.login)
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}