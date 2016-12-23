(function(){
  'use strict';
  angular.module("RestaurantApp")
  .service("RestaurantService", RestaurantService)
  .constant("ApiBasePath", "");

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
  };
})();
