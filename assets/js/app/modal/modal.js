define([
    'angular',
    'text!./templates/modal.html',
    'bootstrap'
], function (ng, modalHtml) {
    ng.module('modal', ['ui.bootstrap'])
        .controller('ModalController', function ($scope, $modalInstance) {
            $scope.close = function () {
                $modalInstance.close();
            };
        })
        .factory('ModalFactory', function ($modal) {
            var Factory = {
                openModal: function () {
                    return $modal.open({
                        controller: 'ModalController',
                        template: modalHtml
                    });
                }
            };
            return Factory;
        });
});
