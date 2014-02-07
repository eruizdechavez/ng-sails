define([
    'angular',
    'text!templates/header.html',
    'welcome/welcome',
    'flags/flags'
], function (ng, headerHtml) {
    ng.module('app', ['flags'])
        .directive('header', function () {
            return {
                restrict: 'A',
                template: headerHtml
            };
        });
});
