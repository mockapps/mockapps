(function() {
    'use strict';

    angular
        .module('haoyaogeApp')
        .controller('SubjectDetailController', SubjectDetailController);

    SubjectDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Subject'];

    function SubjectDetailController($scope, $rootScope, $stateParams, entity, Subject) {
        var vm = this;
        vm.subject = entity;
        
        var unsubscribe = $rootScope.$on('haoyaogeApp:subjectUpdate', function(event, result) {
            vm.subject = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();
