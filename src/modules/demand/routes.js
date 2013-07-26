angular.module('demand', [])
    .config(['$routeProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider',
        function($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('demand', {
                    url: "/demand",
                    template: '<div ng-lazyinclude="demand.view" module="\'demand\'"></div>'
                })
                .state('demand.list', {
                    url: "/list",
                    template: '<div ng-lazyinclude="demand.list" module="\'demand\'"></div>',
                    controller: 'demandlist'
                })

        }
    ])