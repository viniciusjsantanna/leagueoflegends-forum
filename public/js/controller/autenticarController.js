angular.module('LeagueofLegends').controller("autenticarController", function($scope, $http, $window, $location){
    $scope.logado = JSON.parse($window.localStorage.getItem("userLogged"));

    $scope.logar = function(user){
        $http.get('http://jsonplaceholder.typicode.com/users').then(successCallbackUsers, errorCallbackUsers);

        function successCallbackUsers(response){
            $scope.noResult = false;
            $scope.users = response.data;
            verificarLogin(user);
        }
        function errorCallbackUsers(error){
            $scope.noResult = true;
        }
        
    }

    function verificarLogin(user){
         angular.forEach($scope.users,function(element) {
            if(user.email == element.email){
                $window.localStorage.setItem("userLogged", JSON.stringify(element));
                $location.path('/home');
            }
            else{
                $scope.errorMessage = true;
            }
        }, this);
    }

    
    $scope.limparMessagem = function(){
        $scope.errorMessage = false;
    }

    $scope.logout = function(){
        $window.localStorage.removeItem("userLogged");
        $location.path('/home');
    }

});