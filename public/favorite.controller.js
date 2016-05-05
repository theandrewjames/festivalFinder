var app = angular.module("favorites");

app.controller("favoriteController", favorite);
app.$inject = ["$http", "$scope"];

function favorite($http, $scope) {
  var vm = this;
  activate();
  function activate() {
    getFavorites();
  }
  function getFavorites() {
    var festival = $http.get("/getFavorites");
    festival.then(function(info) {
      $scope.data = info.data;
      vm.list = $scope.data;
      console.log(vm.list);
    })
  }

}
