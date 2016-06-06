(function () {
    'use strict';

    angular
        .module('app')
        .factory('events', events);

    events.$inject = ['$http'];

    function events($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() { }
    }
})();