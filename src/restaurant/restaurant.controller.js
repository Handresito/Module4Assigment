(function(){
  'use strict';

  angular.module("RestaurantApp")
  .controller("RestaurantController", RestaurantController);

  RestaurantController.$inject = ['categories'];
  function RestaurantController(categories){
    var vm = this;
    vm.categories = categories;
  }
})();
