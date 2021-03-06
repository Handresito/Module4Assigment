(function(){
  'use strict';
  angular.module("RestaurantApp")
  .service("RestaurantService", RestaurantService)
  .constant("ApiBasePath", "https://davids-restaurant.herokuapp.com");

  RestaurantService.$inject = ['$http', 'ApiBasePath']
  function RestaurantService($http, ApiBasePath){
    var service = this;

    service.getCategories = function(){
      var response = $http({
        method: 'GET',
        url: ApiBasePath + "/categories.json"
      });
      return response;
    };

    service.getItemsForCategory = function(categoryShortName){
      var response = $http({
        method: 'GET',
        url: ApiBasePath + "/menu_items.json",
        params: {
          category: categoryShortName
        }
      });
      return response;
    }
  };
})();
