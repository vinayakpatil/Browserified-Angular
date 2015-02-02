(function() {
    'use strict';

    module.exports = angular.module('app.dashboard', [])
                            .controller('Dashboard', require('./dashboard.js'))
                            .run(require('./config.route.js'));
})();
