(function() {
    angular.module('Login').controller('loginCtrl', loginCtrl);

    function loginCtrl() {
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