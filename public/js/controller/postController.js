angular.module('LeagueofLegends').controller('postController', function($scope, $location, $window, $http){
	$window.scrollTo(0, 0);
	getComments();
	$scope.post = JSON.parse($window.localStorage.getItem("post"));
	$scope.logado = JSON.parse($window.localStorage.getItem("userLogged"));
	console.log($scope.post);
	console.log($scope.logado);
	$scope.comments = [];
	function getComments(){
		$http.get('http://jsonplaceholder.typicode.com/comments').then(sucessCallbackComments,errorCallbackComments);
	}
	
	function sucessCallbackComments(response){
		angular.forEach(response.data,function(element) {
			if(element.postId == $scope.post.id){
				$scope.comments.push(element);
			}
		}, this);
		console.log($scope.comments);
	}

	function errorCallbackComments(error){

	}

	$scope.backHome = function(){
		$window.localStorage.removeItem("post");
		$location.path("/home");
	}

	$scope.createComment = function(comment){
		comment.postId = $scope.post.postId;
		comment.name = $scope.logado.name;
		comment.email = $scope.logado.email;
		$http.post('http://jsonplaceholder.typicode.com/comments', comment).then(success, error);
	}

	function success(response){
		$scope.comments.push(response.data);
		delete $scope.comment;
	}

	function error(response){

	}
// $scope.plant = {};

// $scope.chosenImage = function(path){
// 	$scope.plant.image = path;
// };

// $scope.save = function(plant){
// 	plantsAPI.savePlant(plant).success(function (data) {
// 		//$scope.contatoForm.$setPristine();
// 		$location.path("/home");
// 	});
// };

});