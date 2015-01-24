'use strict';

/*
 * @ngInject
 */
function CurrentWxCtrl(currentWx) {
    let self = this;

    // currentWx is injected into this function from router resolve. See app.js for route "currentWx"
    self.currentWx = currentWx;
}

module.exports = angular
    .module('angularBPSeed.pages.currentWx', [
        require('./../../components/currentWx/currentWx').name
    ])
    .controller('CurrentWxCtrl', CurrentWxCtrl);
