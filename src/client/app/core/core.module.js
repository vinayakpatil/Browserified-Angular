(function() {
    'use strict';

    // Angular Modules
    require('angular-route');

    // Cross app modules
    require('../blocks/router/router.module.js');
    require('../blocks/logger/logger.module.js');

    module.exports = angular.module('app.core', [
                                /*
                                 * Angular modules
                                 */
                                'ngRoute',
                                /*
                                 * Our reusable cross app code modules
                                 */
                                'blocks.router',
                                'blocks.logger'
                            ])
                            .config(require('./config'));
}());