(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
 $scope.shop={};
    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit', {
        title: titleValue,
        property: propertyValue
      });
    };
    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        phone:'1314520',
        createTime:'2017-10-28 10:10:10'
      });
    });
  }]);
})();
