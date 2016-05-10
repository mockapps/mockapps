(function() {
    'use strict';

    angular
        .module('haoyaogeApp')
        .controller('GoodsDetailController', GoodsDetailController);

    GoodsDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Goods'];

    function GoodsDetailController($scope, $rootScope, $stateParams, entity, Goods) {
        var vm = this;
        vm.goods = entity;
        
        var unsubscribe = $rootScope.$on('haoyaogeApp:goodsUpdate', function(event, result) {
            vm.goods = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();
