(function () {
    debugger;
    angular
        .module('BrightenUp')
        .config(configFunc);
    configFunc.$inject = ['$routeProvider'];
    function configFunc($routeProvider) {
        debugger;
        console.log($routeProvider);
        $routeProvider
            .when('/',
            {
                templateUrl: '/scripts/Angular/Login/views/loginPage.html',
                controller: 'loginCtrl'
            });
    }
})();

