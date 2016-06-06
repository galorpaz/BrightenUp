(function () {
    angular.module('BrightenUp')
        .config(configFunc);
    configFunc.$inject = ['$routeProvider'];
    function configFunc($routeProvider) {
        console.log($routeProvider);
        debugger;
        $routeProvider
            .when('/',
            {
                templateUrl: '/scripts/Angular/Login/views/loginPage.html',
                controller: 'loginCtrl'
            });
    };
})()




