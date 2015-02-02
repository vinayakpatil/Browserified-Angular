(function() {
    'use strict';

    module.exports = Dashboard;

    Dashboard.$inject = ['logger'];

    function Dashboard(logger) {
        this.name = 'Vinayak Patil';

        activate();

        function activate() {
            logger.info('Activated View:', 'Dashboard');
        }
    }
}());