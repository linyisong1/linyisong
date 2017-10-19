(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService','$ionicHistory',function ($scope,$stateParams,localStorageService,$ionicHistory) {
   $scope.title=$stateParams.title;
   $scope.property=$stateParams.property;
    $scope.shop = localStorageService.get('Shop',{
      phone:'1314520',
      createTime:'2017-10-28 10:10:10',
      name:'',
      ab:'',
      boss:'',
      email:'',
      shopPhone:''
    });
    $scope.save=function () {
      localStorageService.update('Shop',$scope.shop);
      $ionicHistory.goBack();

    }
  }])
})()
