(function() {
    'use strict';
    angular
        .module('haoyaogeApp')
        .factory('Goods', Goods);

    Goods.$inject = ['$resource', 'DateUtils'];

    function Goods ($resource, DateUtils) {
        var resourceUrl =  'api/goods/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    data.pre_sale_time = DateUtils.convertLocalDateFromServer(data.pre_sale_time);
                    return data;
                }
            },
            'update': {
                method: 'PUT',
                transformRequest: function (data) {
                    data.pre_sale_time = DateUtils.convertLocalDateToServer(data.pre_sale_time);
                    return angular.toJson(data);
                }
            },
            'save': {
                method: 'POST',
                transformRequest: function (data) {
                    data.pre_sale_time = DateUtils.convertLocalDateToServer(data.pre_sale_time);
                    return angular.toJson(data);
                }
            }
        });
    }
})();
