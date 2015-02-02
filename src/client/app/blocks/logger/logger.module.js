(function() {
    'use strict';

    module.exports = angular.module('blocks.logger', [])
                            .factory('logger', require('./logger.js'));
})();
