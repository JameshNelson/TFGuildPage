angular.module("TF")
.service("rosterService", function($http){

  this.getRoster = function(){
    return $http({
      method: "GET",
      url: "http://localhost:3000/roster"
    })
  }

this.removePlayer = function(name){
  var baseUrl = "http://localhost:3000/delete/" + name

  return $http({
    method: "DELETE",
    url: baseUrl
  }).then(function(response){

  })
}

this.addPlayer = function(newPlayer){
  return $http.post("http://localhost:3000/roster/add", {name: newPlayer.name, role: newPlayer.role, class: newPlayer.class, armory: newPlayer.armory}).then(function(response){
  })
  alert('Succesfully submitted');
  $scope.reloadPage = function()
  {
    $window.location.reload(); 
  }
}

})
