'use strict';

angular.module('com.myCompany.myProject')
    .controller('myModuleCtrl',
    ['$scope', 'com.myCompany.myProject.myModule.myService',
        function ($scope, myService) {
            $scope.obj = {};

            $scope.setObj = function(value){
                myService.setVar(value);
            };

            $scope.getObj = function(){
                return myService.getVar();
            };
        }
    ]
);