var app = angular.module("favorites", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "./public/favorite.view.html",
    controller: "favoriteController",
    controllerAs: "favorite"
  })
}])
