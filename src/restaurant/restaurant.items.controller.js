(function(){
  'use strict';

  angular.module("RestaurantApp")
  .controller("ItemsController", ItemsController);

  ItemsController.$inject = ['$stateParams','category'];

  function ItemsController($stateParams, category){
    var vm = this;

    vm.categories = category.data.menu_items;



    vm.name = category.name;
    vm.shortName = category.short_name;
    vm.instructions = category.special_instructions;
  };
})();
