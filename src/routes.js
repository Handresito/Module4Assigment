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
      templateUrl: 'src/restaurant/templates/categories.template.html',
      controller: 'RestaurantController as controller',
      resolve: {
        categories: ['RestaurantService', function(RestaurantService){
          return RestaurantService.getCategories();
        }]
      }
    })
    .state('items',{
      url: '/items/{categoryName}',
      templateUrl: 'src/restaurant/templates/items.template.html',
      controller: 'ItemsController as itemCtrl',
      resolve: {
        category: ['RestaurantService', '$stateParams', function(RestaurantService, $stateParams){
          return RestaurantService.getItemsForCategory($stateParams.categoryName);
        }]
      }
    })
  }
})();
