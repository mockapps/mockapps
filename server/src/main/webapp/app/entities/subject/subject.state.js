(function() {
    'use strict';

    angular
        .module('haoyaogeApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('subject', {
            parent: 'entity',
            url: '/subject',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'haoyaogeApp.subject.home.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/subject/subjects.html',
                    controller: 'SubjectController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('subject');
                    $translatePartialLoader.addPart('global');
                    return $translate.refresh();
                }]
            }
        })
        .state('subject-detail', {
            parent: 'entity',
            url: '/subject/{id}',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'haoyaogeApp.subject.detail.title'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/subject/subject-detail.html',
                    controller: 'SubjectDetailController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('subject');
                    return $translate.refresh();
                }],
                entity: ['$stateParams', 'Subject', function($stateParams, Subject) {
                    return Subject.get({id : $stateParams.id});
                }]
            }
        })
        .state('subject.new', {
            parent: 'subject',
            url: '/new',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/subject/subject-dialog.html',
                    controller: 'SubjectDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: function () {
                            return {
                                subject: null,
                                second_name: null,
                                desc: null,
                                home_banner: null,
                                type: null,
                                position: null,
                                share_image: null,
                                id: null
                            };
                        }
                    }
                }).result.then(function() {
                    $state.go('subject', null, { reload: true });
                }, function() {
                    $state.go('subject');
                });
            }]
        })
        .state('subject.edit', {
            parent: 'subject',
            url: '/{id}/edit',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/subject/subject-dialog.html',
                    controller: 'SubjectDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Subject', function(Subject) {
                            return Subject.get({id : $stateParams.id});
                        }]
                    }
                }).result.then(function() {
                    $state.go('subject', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('subject.delete', {
            parent: 'subject',
            url: '/{id}/delete',
            data: {
                authorities: ['ROLE_USER']
            },
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/entities/subject/subject-delete-dialog.html',
                    controller: 'SubjectDeleteController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Subject', function(Subject) {
                            return Subject.get({id : $stateParams.id});
                        }]
                    }
                }).result.then(function() {
                    $state.go('subject', null, { reload: true });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }

})();
