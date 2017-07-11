angular.module("TF")
.controller('rosterCtrl', function($scope, rosterService) {
   $scope.test = 'aboutCtrl works';

   $scope.getRoster = function(){
     rosterService.getRoster().then(function(response){
       console.log(response);
       $scope.roster = response.data;
       return $scope.roster
     })
   }

$scope.getRoster();
console.log($scope.roster)




});
