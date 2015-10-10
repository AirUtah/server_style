/**
 * Created by Xenox on 10/8/2015.
 */
var app = angular.module('styleguide', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/home.html'
    })
        .when('/Item1', {
            templateUrl: 'app/views/Item1.html'
        })
        .when('/Item2', {
            templateUrl: 'app/views/Item2.html'
        })
        .when('/Item3',{
            templateUrl: 'app/views/Item3.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);
angular.module('styleguide').controller('navController', ["$location",function ($location) {

    this.component = function(){
        var template = (''+$location.path()).substring(1);
        if(template)
            return template;
        else{
            return "Welcome!"
        }
    }
}]);