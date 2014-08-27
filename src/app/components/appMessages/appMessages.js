'use strict';

/**
 *
 * @constructor
 * @ngInject
 */
function AppMessages() {
    //var self = this;
    return {
        restrict: 'EA',
        controllerAs: 'appMessagesCtrl',
        controller: 'AppMessagesCtrl',
        templateUrl: 'components/appMessages/appMessages.tpl.html',
        scope: {
            // we don't need anything from other scopes. So create an empty isolate scope.
        }
    };
}

module.exports = angular
    .module('angularBPSeed.components.appMessages', [
        require('./appMessagesCtrl').name
    ])
    .directive('appMessages', AppMessages);