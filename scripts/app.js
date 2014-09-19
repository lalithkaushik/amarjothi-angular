var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers',
  'ngAnimate'
]);
 
phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	  when('/', {
        templateUrl: 'home.html',
        controller: 'IndexCtrl'
      }).
	  when('/index', {
        templateUrl: 'home.html',
        controller: 'IndexCtrl'
      }).
	  when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutCtrl'
      }).
	  when('/contact', {
        templateUrl: 'contact.html',
        controller: 'ContactCtrl'
      }).
      otherwise({
        redirectTo: '/index'
      });
  }]);
  
  
  function HomeFragmentController($scope) {
    $scope.$on("$routeChangeSuccess", function (scope, next, current) {
        $scope.transitionState = "active"
    });
}