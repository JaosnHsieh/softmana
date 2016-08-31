//
window.c= console.log;
//
// public/core.js
var app = angular.module('app', ["xeditable","720kb.datepicker","ngLoadingSpinner"]);
app.config(['$locationProvider', function($locationProvider){
    $locationProvider.html5Mode(true);    
}]);

// app.controler('mainController',function mainController($scope, $http) {   
// });
app.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

//style
app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});


//editable controller - softDataCtrl start
app.controller('softDataCtrl', function($scope, $filter, $q, $http) {

    $http.get('/api/softData').success(function(data) {
            $scope.softData = data;
            console.log('load softData successfully!');
            })
            .error(function(data){
            });

    $scope.test = function(data){
        console.log(data);
    };

    $scope.softDatas = [];

    $scope.loadSoftData = function() {
        
        };


    $scope.removeSoftData = function(index) {

         $http({ 
                        method :  'DELETE' , 
                        url :  '/api/softData' , 
                        data :  {'data':$scope.softData[index]}, 
                        headers :  { 'Content-Type' :  'application/json' } 
                    }).success(function(data){

                        $scope.softData.splice(index, 1);
                        console.log(data,'update softMana successfully!');

                    });
        

       
    };

    $scope.saveSoftData = function(data,index){};

    $scope.showStatus = function(softData) {
    var selected = [];
    if(softData.STATUS_TYPE) {
      selected = $filter('filter')($scope.statuses, {value: softData.STATUS_TYPE});
    }
    return selected.length ? selected[0].text : 'Not set';
  };

  $scope.statuses = [
    {value: 1, text: '選項1'},
    {value: 2, text: '選項2'},
    {value: 3, text: '選項3'},
    {value: 4, text: '選項4'}
  ]; 


  $scope.saveSoftData = function(data){
                    $http({ 
                        method :  'PUT' , 
                        url :  '/api/softData' , 
                        data :  {'data':data}, 
                        headers :  { 'Content-Type' :  'application/json' } 
                    }).success(function(data){

                       console.log(data,'update softMana successfully!');

                    });
        
    }


});

//// softDataCtrl end



//editable controller - softManaCtrl start
app.controller('softManaCtrl', function($scope, $filter, $q, $http,$window) {


    $scope.selection ={  ////給chcekbox選擇用的資料
        ids:{}
    };
    $scope.toggleSelect = false;

    $scope.selectAll = function(){ 
        if($scope.toggleSelect==false){ ////toggle all selection
                 for(var d in $scope.softData){
                    $scope.selection.ids[$scope.softData[d].RECORD_IN_NO]=true ;
                    $scope.toggleSelect = true;
                }  
        }
        else{
                for(var d in $scope.softData){
                    $scope.selection.ids[$scope.softData[d].RECORD_IN_NO]=false ;
                    $scope.toggleSelect = false;
                }    
        }
        
        
    }


    $scope.printAll = function(){
        if(Object.keys($scope.selection.ids)<1){}
        else{
            $window.location = '/Soft/Soft_prn1.aspx?entry='+Object.keys($scope.selection.ids).toString();
        }
    
    }

    
    //// loading softDatas 
    $http.get('/api/softData').success(function(data) {
            $scope.softData = data;
            console.log('load softData successfully!');
            })
            .error(function(data){
            });

    $scope.moveToSoftPrn1 = function(data){
        $window.location = '/Soft/Soft_prn1.aspx?entry='+data;
    };
    
    $scope.moveToTrans_Add2 = function(data){
        $window.location = '/Apply/Trans_Add2.aspx?soft='+data;
    }

    // $scope.softDatas = [];

    // $scope.loadSoftData = function() {
        
    //     };


    $scope.removeSoftData = function(index) {

         $http({ 
                        method :  'DELETE' , 
                        url :  '/api/softData' , 
                        data :  {'data':$scope.softData[index]}, 
                        headers :  { 'Content-Type' :  'application/json' } 
                    }).success(function(data){

                        $scope.softData.splice(index, 1);
                        console.log(data,'update softMana successfully!');

                    });
        

       
    };

    $scope.saveSoftData = function(data,index){};

    $scope.showStatus = function(softData) {
    var selected = [];
    if(softData.STATUS_TYPE) {
      selected = $filter('filter')($scope.statuses, {value: softData.STATUS_TYPE});
    }
    return selected.length ? selected[0].text : 'Not set';
  };

  $scope.statuses = [
    {value: 1, text: '選項1'},
    {value: 2, text: '選項2'},
    {value: 3, text: '選項3'},
    {value: 4, text: '選項4'}
  ]; 


  $scope.saveSoftData = function(data){
                    $http({ 
                        method :  'PUT' , 
                        url :  '/api/softData' , 
                        data :  {'data':data}, 
                        headers :  { 'Content-Type' :  'application/json' } 
                    }).success(function(data){

                       console.log(data,'update softMana successfully!');

                    });
        
    }


});

//// softmana ctrl end






//editable controller - softManaCtrl start
app.controller('softAddCtrl', function($scope, $filter, $http , $window) {

        //// 日期格式的regex
        $scope.regexdate =/((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/;

        //軟體保管單異動
            $scope.changeRecords = [
                {date:'123' , name:'myname'},
                {date:'1234' , name:'mary'}
            ];
        //軟體保管單異動 結束    
        $scope.form={};
        $scope.form.options1 = []; //軟體別
        $scope.form.options2 = []; //軟體名稱
        $scope.form.options3 = []; //使用版別
        $scope.form.options4 = []; //軟體來源
        $scope.form.options5 = []; //軟體存放裝置
        $scope.form.options6 = []; //保管單位
        $scope.form.options7 = []; //保管人


        //取得軟體別選項資料
        $http.get('/api/defOption?tableName=tb_OCP_SOFTDATA&colName=SOFT_USE_TYPE')               
                    .success(function(data) {
                    
                    $scope.form.options1 = data;

                    })
                    .error(function(data){
                    });

        //取得軟體名稱選項資料
        $http.get('/api/softName')               
                    .success(function(data) {
                    
                    $scope.form.options2 = data;

                    })
                    .error(function(data){
                    });            
       
       //取得使用版別
       $http.get('/api/defOption?tableName=tb_OCP_SOFTDATA&colName=SOFT_PRODUCT_TYPE')               
                    .success(function(data) {

                    $scope.form.options3 = data;
                    
                    })
                    .error(function(data){
                    });    
       
       //取得軟體來源
       
       $http.get('/api/defOption?tableName=tb_OCP_SOFTDATA&colName=SOFT_SOURCE_TYPE')               
                    .success(function(data) {

                    $scope.form.options4 = data;
                    
                    })
                    .error(function(data){
                    });

       //取得軟體存放媒體

       $http.get('/api/defOption?tableName=tb_OCP_SOFTDATA&colName=SOFT_STORE_MEDIA')               
                    .success(function(data) {

                    $scope.form.options5 = data;
                    
                    })
                    .error(function(data){
                    });

        //取得保管單位

       $http.get('/api/tbDep')               
                    .success(function(data) {

                    $scope.form.options6 = data;
                    
                    })
                    .error(function(data){
                    });

        //取得保管人 ( 當 保管單位被選取後 )

        $scope.getOwners = function(depno){
            
            $scope.soft.SOFT_OWN_DEPNO = depno;

            $http.get('/api/adViewSSO?department='+$scope.soft.SOFT_OWN_DEP)               
                    .success(function(data) {
                    console.log(data);
                    delete $scope.soft.manager;

                    $scope.form.options7 = data;

                   
                    
                    })
                    .error(function(data){
                    });
        };

        $scope.addMultiNames = function(){
            $scope.soft.SOFT_NAME = $scope.name;
        }

        $scope.updateRealManager = function(){
            
            $scope.soft.SOFT_OWN_USER = $scope.form.fakeManager.displayName==null?'':$scope.form.fakeManager.displayName;
        }

        //// process form start
        $scope.processForm = function(){
            console.log('processing form');

            $http({ 
                            method :  'POST' , 
                            url :  '/api/softData' , 
                            data :  {'data':$scope.soft}, 
                            headers :  { 'Content-Type' :  'application/json' } 
                })
                .success(function(softData){

                        

                    $http.get('/api/getCurrentTNO').success(function(data){

                        
                        $http({ 
                            method :  'POST' , 
                            url :  '/api/softChange' , 
                            data :  {'data':$scope.soft}, 
                            headers :  { 'Content-Type' :  'application/json' } 
                            }).success(function(data){
                                
                                
                                $window.location = '/Soft/Soft_prn1.aspx?entry='+softData.RECORD_IN_NO;
                                
                            });

                        
                        });

                })
                .error(function(err){
                    // console.log(err);
                    $scope.errors = err;
                    
                });
        }////process form end







        // $scope.removeSoftData = function(index) {

        //             $http({ 
        //                     method :  'DELETE' , 
        //                     url :  '/api/softData' , 
        //                     data :  {'data':$scope.softData[index]}, 
        //                     headers :  { 'Content-Type' :  'application/json' } 
        //                 }).success(function(data){

        //                     $scope.softData.splice(index, 1);
        //                     console.log(data,'update softMana successfully!');

        //                 });

                    
             
        // };

    


});

//// softmana ctrl end


//// TransAdd2Ctrl start
app.controller('TransAdd2Ctrl', function mainController($scope, $http,$location,$window) {
        $scope.softData = {};
        $scope.softApply = {};
        var RECORD_IN_NO = $location.search().soft;//query from url
        
        // loading softdata 
        $http.get('/api/softData?recordInNo='+RECORD_IN_NO) 
            .success(function(data){
                $scope.softData = data[0];
            })
            .error(function(err){
                c('err : ',err);
            });
        
        //save button
        $scope.saveAndMove = function(){

            $http.post('/api/softApply',{ softApply:$scope.softApply , softData:$scope.softData })
                .success(function(data){
                    // $window.location = './Apply/Trans_prn1.aspx?entry='+data.IDNo;
                    $window.location = '/Apply/Trans_prn1.aspx?entry=1289';
                })
                .error(function(err){
                    c(err);
                });
        }
});


////TransAdd2Ctrl end


//// TransPrn1Ctrl 
app.controller('TransPrn1Ctrl', function mainController($scope, $http,$location,$window) {
    
    $scope.unitType = '';
    $scope.header = '';

    $http.get('/api/softApply?entry='+$location.search().entry)
        .success(function(data){
            $scope.softApply = data;

            if($scope.softApply.FType==4){ 
                $scope.header = '軟體保管單 (原軟體增加)';
                $scope.unitType = "保　管";
            }
            else if($scope.softApply.FType==2){ 
                $scope.header = '軟體移轉申請單';
                $scope.unitType = "移　入";
             }
        });

    $http.get('/api/TransPrn1Ctrl?entry='+$location.search().entry)
        .success(function(data){
            data.serverDate = parseInt(data.serverDate.substring(0,5))-1911 +'年'+ data.serverDate.substring(5,7)+'月'+data.serverDate.substring(8,10)+'日'; 
            $scope.mixData = data;
            c(data);
        });

});
//// TransPrn1Ctrl end





//mainController
app.controller('mainController', function mainController($scope, $http) {
    $scope.formData = {};
    // when landing on the page, get all papers and show them
    $http.get('/api/papers')
        .success(function(data) {
            $scope.papers = data;
            console.table(data);
            $scope.tableHeaders = [];
            for(var key in data[0]){
                $scope.tableHeaders.push(key);
            }
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createTodo = function() {
        $http.post('/api/papers', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.papers = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    $scope.deleteTodo = function(id) {
        $http.delete('/api/papers/' + id)
            .success(function(data) {
                $scope.papers = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

});
