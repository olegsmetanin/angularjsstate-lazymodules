angular.module('order', [])
    .config(['$routeProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider',
        function($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('order', {
                    url: "/order",
                    template: '<div ng-lazyinclude="order.view" module="\'order\'"></div>'
                })
                .state('order.list', {
                    url: "/list",
                    template: '<div ng-lazyinclude="order.list" module="\'order\'"></div>',
                    controller: 'orderlist'
                })

        }
    ])