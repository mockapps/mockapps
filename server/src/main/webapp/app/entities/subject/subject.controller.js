(function() {
    'use strict';

    angular
        .module('haoyaogeApp')
        .controller('SubjectController', SubjectController);

    SubjectController.$inject = ['$scope', '$state', 'Subject'];

    function SubjectController ($scope, $state, Subject) {
        var vm = this;
        vm.subjects = [];
        vm.loadAll = function() {
            Subject.query(function(result) {
                vm.subjects = result;
            });
        };

        vm.loadAll();
        
    }
})();
