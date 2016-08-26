// public/core.js
var app = angular.module('app', ["xeditable","720kb.datepicker"]);

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
app.controller('softManaCtrl', function($scope, $filter, $q, $http) {

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

//// softmana ctrl end






//editable controller - softManaCtrl start
app.controller('softAddCtrl', function($scope, $filter, $http) {
    
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

            $http.get('/api/adViewSSO?department='+$scope.soft.manaDep)               
                    .success(function(data) {
                    
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
            
            $scope.soft.manager = $scope.form.fakeManager.displayName==null?'':$scope.form.fakeManager.displayName;
        }

        $scope.processForm = function(){

            $http({ 
                            method :  'POST' , 
                            url :  '/api/test' , 
                            data :  {'data':$scope.soft}, 
                            headers :  { 'Content-Type' :  'application/json' } 
                        }).success(function(data){

                           console.log(data);
                            console.log(data,'update softMana successfully!');

                        });
        }








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

    


});

//// softmana ctrl end














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
