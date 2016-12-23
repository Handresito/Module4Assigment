(function(){
  'use strict';

  angular.module("RestaurantApp")
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'src/restaurant/templates/home.template.html'
    })
    .state('categories',{
      url: '/categories',
      templateUrl: 'src/restaurant/templates/categories.template.html'
    })
    .state('items',{
      url: '/items',
      templateUrl: 'src/restaurant/templates/items.template.html'
    })
  }
})();
