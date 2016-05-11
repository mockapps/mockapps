(function() {
    'use strict';

    angular
        .module('haoyaogeApp')
        .factory('ProfileService', ProfileService);

    ProfileService.$inject = ['$q', '$http'];

    function ProfileService($q, $http) {

        var dataPromise;

        var service = {
            getProfileInfo : getProfileInfo
        };

        return service;

        function getProfileInfo() {
            if (!angular.isDefined(dataPromise)) {
                dataPromise = $http.get('api/profile-info').then(function(result) {
                    if (result.data.active_profiles) {
                        var response = {};
                        response.active_profiles = result.data.active_profiles;
                        response.ribbonEnv = result.data.ribbonEnv;
                        response.inProduction = result.data.active_profiles.indexOf("prod") !== -1;
                        response.swaggerDisabled = result.data.active_profiles.indexOf("no-swagger") !== -1;
                        return response;
                    }
                });
            }
            return dataPromise;
        }
    }
})();
