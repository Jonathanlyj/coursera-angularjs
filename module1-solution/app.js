(function () {
'use strict';

angular.module('LunchCheck',[])
//Initialize controller
.controller('LCController', LCController);

LCController.$inject = ['$scope'];

function LCController($scope){
//define check function triggered by cllick event
$scope.check = function(){
  var lunchString = "".concat($scope.lunches);

  //deal with the case of empty input
  if (lunchString == "" || lunchString == "undefined"){
    $scope.message = "Please enter data first" ;
  }
  //deal with the case of having somthing enterd
  else{
    var arrayOfLunches  = lunchString.split(',');
    var numLunches = arrayOfLunches.length;
    if (numLunches <= 3){
      $scope.message = "Enjoy!" ;
    }
    else {
      $scope.message = "Too much!" ;
    }

  }


};
2



}


})();
