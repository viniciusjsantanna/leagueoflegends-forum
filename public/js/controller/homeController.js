angular.module('LeagueofLegends').controller("homeController", function($scope, $http, $window, $location){
    $window.scrollTo(0, 0);
    $scope.tituloForum = 'Liga das Lendas';

    $http.get('http://jsonplaceholder.typicode.com/posts').then(successCallbackPosts, errorCallbackPosts);

    function successCallbackPosts(response){
        $scope.noResult = false;
        $scope.posts = response.data;
        GetUsers();
    }
    function errorCallbackPosts(error){
        $scope.noResult = true;
    }
    
    function GetUsers(){
        $http.get('http://jsonplaceholder.typicode.com/users').then(successCallbackUsers, errorCallbackUsers);

        function successCallbackUsers(response){
            $scope.noResult = false;
            $scope.users = response.data;
            JoinPostsUser();
        }
        function errorCallbackUsers(error){
            $scope.noResult = true;
        }
    }

    function JoinPostsUser(){
        var i = 0;
        angular.forEach($scope.posts, function(post) {
            angular.forEach($scope.users, function(user) {
                if(post.userId == user.id){
                    $scope.posts[i].user = user;
                    i++;
                }
            });
        });
    }

    $scope.getPosts = function(post){
        $window.localStorage.setItem("post", JSON.stringify(post));
        $location.path('/post')
    }
    
});

