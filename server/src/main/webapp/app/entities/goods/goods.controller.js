(function() {
    'use strict';

    angular
        .module('haoyaogeApp')
        .controller('GoodsController', GoodsController);

    GoodsController.$inject = ['$scope', '$state', 'Goods'];

    function GoodsController ($scope, $state, Goods) {
        var vm = this;
        vm.goods = [];
        vm.loadAll = function() {
            Goods.query(function(result) {
                vm.goods = result;
            });
        };

        vm.loadAll();
        
    }
})();
