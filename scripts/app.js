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
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      }).
	  when('/main', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      }).
	  when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutCtrl'
      }).
	  when('/client', {
        templateUrl: 'clients.html',
        controller: 'ClientCtrl'
      }).
	  when('/process', {
        templateUrl: 'process.html',
        controller: 'ProcessCtrl'
      }).
	  when('/dyeing', {
        templateUrl: 'dyeing.html',
        controller: 'DyeingCtrl'
      }).
	  when('/video', {
        templateUrl: 'video.html',
        controller: 'VideoCtrl'
      }).
	  when('/certification', {
        templateUrl: 'certification.html',
        controller: 'CertificationCtrl'
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