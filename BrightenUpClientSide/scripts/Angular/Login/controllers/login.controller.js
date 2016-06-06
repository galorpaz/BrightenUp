(function() {
    angular
        .module('Login')
        .controller('loginCtrl', loginCtrl);

    loginCtrl.$inject = ['$scope', '$http'];

    function loginCtrl($scope, $http) {
        $scope.showBadPassword = false;
        $http.post('api/login', { 'mail': $scope.user.mail, "password": $scope.user.password })
            .then(function(response) {
                if (response == null) {
                    $scope.showBadPassword = true;
                }
                //$scope. = response.data;
            });
    }
})();