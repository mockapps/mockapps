(function() {
    'use strict';

    angular
        .module('haoyaogeApp')
        .controller('SubjectDialogController', SubjectDialogController);

    SubjectDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Subject'];

    function SubjectDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Subject) {
        var vm = this;
        vm.subject = entity;

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        var onSaveSuccess = function (result) {
            $scope.$emit('haoyaogeApp:subjectUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        };

        var onSaveError = function () {
            vm.isSaving = false;
        };

        vm.save = function () {
            vm.isSaving = true;
            if (vm.subject.id !== null) {
                Subject.update(vm.subject, onSaveSuccess, onSaveError);
            } else {
                Subject.save(vm.subject, onSaveSuccess, onSaveError);
            }
        };

        vm.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
})();
