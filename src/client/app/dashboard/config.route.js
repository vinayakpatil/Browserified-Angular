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
                url: '/',
                config: {
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'Dashboard',
                    controllerAs: 'vm',
                    title: 'Dashboard'
                }
            }
        ];
    }
})();
