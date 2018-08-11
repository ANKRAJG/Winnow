
var app = angular.module('winnow', ['ui.router', 'ngAnimate']);

app.run(function() {

});

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/summary1");

    $stateProvider.state('app', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'mainCtrl',
      abstract: true
    })
    .state('app.summary1', {
      url: 'summary1',
      title: 'Summary1',
      templateUrl: 'views/summary1/summary1.html',
      controller: 'summary1Ctrl'
    })
    .state('app.summary2', {
      url: 'summary2',
      title: 'Summary2',
      templateUrl: 'views/summary2/summary2.html',
      controller: 'summary2Ctrl'
    })

    //$locationProvider.html5Mode(true);

}]);

app.controller('appCtrl', ['$scope',
  function($scope) {

}]);
