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


//editable controller
app.controller('softDataCtrl', function($scope, $filter, $q, $http) {

    $http.get('/api/softData').success(function(data) {
            $scope.softData = data;
            console.log('load softData successfully!');
            })
            .error(function(data){
            });

    $scope.test = function(){
        console.log('test11');
    };

    $scope.softDatas = [];

    $scope.loadSoftData = function() {
        
        };

        // remove user
    $scope.removeSoftData = function(index) {
        $scope.softData.splice(index, 1);
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
console.table(data);    
                    $http({ 
                        method :  'PUT' , 
                        url :  '/api/softData' , 
                        data :  {'data':data}, 
                        headers :  { 'Content-Type' :  'application/json' } 
                    }).success(function(data){
                        console.table(data);
                    });
        
    }


});













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
