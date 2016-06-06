<<<<<<< HEAD
﻿(function() {
    var brightenUp = angular.module('BrightenUp', ['Events', 'Login']);
    brightenUp.config(function($routeProvider) {
        $routeProvider
            .when('/',
            {
                templateUrl: 'loginPage.html',
                controller: 'login.controller.js'
            });
    });
=======
﻿(function () {
    'use strict';
    angular.module('BrightenUp', ['Events', 'Login']);
>>>>>>> refs/remotes/origin/event-module
})();
