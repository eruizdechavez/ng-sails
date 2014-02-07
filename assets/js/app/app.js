define([
    'angular',
    'text!templates/header.html',
    'welcome/welcome'
], function (ng, headerHtml) {
    ng.module('app', ['welcome'])
        .directive('header', function () {
            return {
                restrict: 'A',
                template: headerHtml
            };
        });
});
