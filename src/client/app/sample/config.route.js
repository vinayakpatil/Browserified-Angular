(function() {
    'use strict';

    module.exports = appRun;

    appRun.$inject = ['routeHelper'];

    function appRun(routeHelper) {
        routeHelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/sample',
                config: {
                    templateUrl: 'app/sample/sample.html',
                    title: 'Sample'
                }
            }
        ];
    }

}());