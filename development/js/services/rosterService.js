angular.module("TF")
.service("rosterService", function($http){

  this.getRoster = function(){
    return $http({
      method: "GET",
      url: "http://localhost:3000/roster"
    })
  }
})
