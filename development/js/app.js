angular.module("TF", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/roster');

       $stateProvider
           .state('roster', {
               templateUrl: '../views/roster.html',
               controller: 'rosterCtrl',
               url: '/roster'
           })
           
           .state('about', {
               templateUrl: '../views/about.html',
               controller: 'aboutCtrl',
               url: '/about'
           })

           .state('calander', {
               templateUrl: '../views/calander.html',
               controller: 'calanderCtrl',
               url: '/calander'
           });
 });
