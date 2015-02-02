(function() {
    'use strict';

    module.exports = angular.module('app.sample', [])
                            .run(require('./config.route.js'));
}())