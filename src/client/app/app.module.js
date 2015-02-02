(function() {
    'use strict';

    require('angular');

    // Core Modules
    require('./core/core.module.js');

    // Feature Modules
    require('./layout/layout.module.js');
    require('./dashboard/dashboard.module.js');
    require('./sample/sample.module.js');

    angular.module('app', [
        /*
         * Everybody has access to these.
         */
        'app.core',
        /*
         * Feature areas
         */
        'app.layout',
        'app.dashboard',
        'app.sample'
    ]);

}());

