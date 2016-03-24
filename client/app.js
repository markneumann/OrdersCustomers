console.log('loading app.js');
// Let's create our angular module
var OCModule = angular.module('OC_app', ['ngRoute']);

// the .controller() method adds a controller to the module
OCModule.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '/partials/orders.html'
    })
    .when('/customers', {
        templateUrl: '/partials/customers.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
