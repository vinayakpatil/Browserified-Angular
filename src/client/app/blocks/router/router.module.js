(function() {
    'use strict';

    require('angular-route');

    module.exports = angular.module('blocks.router', [])
                            .provider('routeHelperConfig', require('./routeHelperConfig'))
                            .factory('routeHelper', require('./routeHelper'));
}());