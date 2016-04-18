var myapp = angular.module("workoutlog", ['ngMaterial', 'ngMessages', 'material.svgAssetsCache']); 

	myapp.controller("workCtrl", function ($scope) {
		
		$scope.works = [
		  {time: 1, nome: "Run", date: "25/11/2014" }, 
		  {time: 2, nome: "Bike", date: "25/11/2014" }, 
		  {time: 3, nome: "Swimming", date: "26/11/2014" }
		]; 

		$scope.adicionar = function(work) {
			$scope.works.push(angular.copy(work));
			$scope.sum();
			delete $scope.work; 
		}; 

		$scope.remover = function(index) {
        	$scope.works.splice(index, 1);
        	$scope.sum();
		};
    
    	$scope.sum = function(){
			$scope.total = $scope.works.reduce(function(acc, work) {
   			return acc + parseInt(work.time);
			},0);
		};
		
		$scope.sum();

}); 