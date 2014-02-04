'use strict';

angular.module('com.myCompany.myProject', [
    'ngRoute',
    'com.myCompany.myProject.myModule'
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html'
    })
    .when('/myModule', {
        templateUrl: 'views/myModule/index.html',
        controller: 'myCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});