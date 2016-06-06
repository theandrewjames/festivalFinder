var app = angular.module("favorites", []);

app.controller("favoriteController", favorite);
app.$inject = ["$http"];

function favorite($http) {
  var vm = this;
  activate();
  function activate() {
    getFavorites();
  }
  function getFavorites() {
    var festival = $http.get("/getFavorites");
    festival.then(function(info) {
      vm.list = info.data;
    })
  }
  setInterval(getFavorites, 1000);
  
  vm.finished = function(event) {
    var id = event.target.dataset.id;
    for(var i = 0;i < vm.list.length;i++) {
      if(vm.list[i].id == id) {
        vm.list.splice(i, 1);
      }
    }

  }
}
