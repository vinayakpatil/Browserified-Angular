(function() {
    'use strict';

    module.exports = configure;

    function configure($routeProvider, routeHelperConfigProvider) {
        // Configure the common route provider
        routeHelperConfigProvider.config.$routeProvider = $routeProvider;
        routeHelperConfigProvider.config.docTitle = 'Angular Browserified: ';
    }
}());