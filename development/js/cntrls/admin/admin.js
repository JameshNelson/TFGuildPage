angular.module('TF')
.controller("adminCtrl", function($scope, rosterService, ){

$scope.classes = ['DeathKnight', 'DemonHunter', 'Druid', 'Hunter', 'Mage', 'Monk', 'Paladin', 'Priest', 'Rogue','Shaman', 'Warlock', 'Warrior']
$scope.roles = ['Dps', 'Healer', 'Tank']

  $scope.deletePlayer = function(name){
    rosterService.removePlayer(name)
  }

  $scope.addPlayer = function(name, role, pClass, armory){
    var newPlayer = {
      name: name,
      role: role,
      class: pClass,
      armory: armory
    }
    // if(newPlayer.name === undefined || newPlayer.roll === undefined || newPlayer.class === undefined || newPlayer.armory === undefined){
    //   alert("Fill out fields")
    // }
     rosterService.addPlayer(newPlayer);
     alert('Succesful submit');
     $route.reload();

  }


})
