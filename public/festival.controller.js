var app = angular.module("favorites");

app.controller("festivalController", festival);
app.$inject = ["$http", "$scope"];

function festival($http, $scope) {
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
      console.log(vm.list)
    })
  }

  vm.finished = function(event) {
 var id = event.target.dataset.id;
 for(var i = 0;i < vm.list.length;i++) {
   console.log(vm.list[i])
   if(vm.list[i].id == id) {
     vm.list.splice(i, 1);
     $scope.data = vm.list;
     console.log(vm.list);
     console.log($scope.data)
   }
 }
}
}
