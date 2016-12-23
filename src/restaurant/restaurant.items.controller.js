(function(){
  'use strict';

  angular.module("RestaurantApp")
  .controller("ItemsController", ItemsController);

  ItemsController.$inject = ['$stateParams','categories', 'category'];

  function ItemsController($stateParams, categories, category){
    var vm = this;

    var category = category;   


    vm.name = category.name;
    vm.shortName = category.short_name;
    vm.instructions = category.special_instructions;
  };
})();
