angular.module('com.myCompany.myProject.myModule', [], function($provide) {
    $provide.factory('com.myCompany.myProject.myModule.myService', ['$http', function($http){
        var privateVariable;
        return {
            getVar: function(){
                return privateVariable;
            },
            setVar: function(value){
                $http.put('/api/v1/myModule', { key: value })
                .success(function(response){
                    privateVariable = response.value;
                    return;
                });
            }
        };
    }]);
});