angular.module('TF')
.controller("adminCtrl", function($scope, rosterService, ){

$scope.classes = ['DeathKnight', 'DemonHunter', 'Druid', 'Hunter', 'Mage', 'Monk', 'Paladin', 'Priest', 'Rogue','Shaman', 'Warlock', 'Warrior']
$scope.roles = ['Dps', 'Healer', 'Tank']

  $scope.deletePlayer = function(name){
    if(name === undefined){
      alert("Name is required");
    }
    else {rosterService.removePlayer(name)
      alert("Player Deleted")
    }
  }

  $scope.addPlayer = function(name, role, pClass, armory){
    var newPlayer = {
      name: name,
      role: role,
      class: pClass,
      armory: armory
    }
    if(newPlayer.name === undefined || newPlayer.role === undefined || newPlayer.class === undefined || newPlayer.armory === undefined){
      alert("Fill out fields")
    }
    else {rosterService.addPlayer(newPlayer);
     alert('Succesful submit');}

  }




})
