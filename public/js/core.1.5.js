// public/core.js
var app = angular.module('app', ["xeditable"]);

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
        
        $http.get('/api/defOption?tableName=tb_OCP_SOFTDATA&colName=SOFT_USE_TYPE')
                    .success(function(data) {
                    
                    })
                    .error(function(data){
                    });

    

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
