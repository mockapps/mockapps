(function() {
    'use strict';

    angular
        .module('haoyaogeApp')
        .controller('SubjectDeleteController',SubjectDeleteController);

    SubjectDeleteController.$inject = ['$uibModalInstance', 'entity', 'Subject'];

    function SubjectDeleteController($uibModalInstance, entity, Subject) {
        var vm = this;
        vm.subject = entity;
        vm.clear = function() {
            $uibModalInstance.dismiss('cancel');
        };
        vm.confirmDelete = function (id) {
            Subject.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        };
    }
})();
