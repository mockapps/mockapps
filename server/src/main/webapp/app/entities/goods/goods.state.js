(function() {
    'use strict';

    angular
        .module('haoyaogeApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('goods', {
            parent: 'entity',
            url: '/goods',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'haoyaogeApp.goods.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/goods/goods.html',
                    controller: 'GoodsController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('goods');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('goods-detail', {
            parent: 'entity',
            url: '/goods/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'haoyaogeApp.goods.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/goods/goods-detail.html',
                    controller: 'GoodsDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('goods');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Goods', function($stateParams, Goods) {
                    return Goods.get({id : $stateParams.id});
                }]
            }
        })
        .state('goods.new', {
            parent: 'goods',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/goods/goods-dialog.html',
                    controller: 'GoodsDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                cat_id: null,
                                mall_id: null,
                                goods_name: null,
                                is_app: null,
                                event_type: null,
                                goods_desc: null,
                                is_onsale: null,
                                thumb_url: null,
                                allowed_region: null,
                                country: null,
                                warehouse: null,
                                image_url: null,
                                is_refundable: null,
                                is_pre_sale: null,
                                pre_sale_time: null,
                                skip_goods: null,
                                share_desc: null,
                                cat_id_1: null,
                                cat_id_2: null,
                                cat_id_3: null,
                                sku: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('goods', null, { reload: true });
                }, function() {
                    $state.go('goods');
                });
            }]
        })
        .state('goods.edit', {
            parent: 'goods',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/goods/goods-dialog.html',
                    controller: 'GoodsDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Goods', function(Goods) {
                            return Goods.get({id : $stateParams.id});
                        }]
                    }
                }).result.then(function() {
                    $state.go('goods', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('goods.delete', {
            parent: 'goods',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/goods/goods-delete-dialog.html',
                    controller: 'GoodsDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Goods', function(Goods) {
                            return Goods.get({id : $stateParams.id});
                        }]
                    }
                }).result.then(function() {
                    $state.go('goods', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
