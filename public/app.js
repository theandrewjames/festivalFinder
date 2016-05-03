var app = angular.module("favorites", []);

app.controller("favoriteController", favorite);
app.$inject = ["$http"];

function favorite($http) {
  var vm = this;

  var festival = $http.get("http://localhost:" + port + "/getFavorites");
  festival.then(function(info) {
    vm.list = info.data;
  })
}
