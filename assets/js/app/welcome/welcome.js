define([
    'angular',
    'text!./templates/welcome.html',
    'modal/modal'
], function (ng, welcomeHtml) {
    ng.module('welcome', ['modal'])
        .controller('WelcomeController', function ($scope, ModalFactory) {
            $scope.openModal = function () {
                ModalFactory.openModal();
            };
        })
        .directive('welcome', function () {
            return {
                restrict: 'A',
                template: welcomeHtml,
                controller: 'WelcomeController'
            };
        });
});
