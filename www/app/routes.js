"use strict";

angular.module("myApp").config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/main");

    $stateProvider.state("main", {
        url: "/main",
        templateUrl: "app/components/main/main.html",
        title: "CSR Demo",
        controller: "myAppController",
        controllerAs: "main"
    });

}]);
