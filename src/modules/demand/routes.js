angular.module('demand', [])
    .config(['$routeProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider',
        function($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider) {

            var demandList = {
                name: 'page2C.demandList',
                url: '/demands',
                views: {
                    'sidebar': {
                        template: '<div ng-lazyinclude="demandListFilter" module="\'demand\'"></div>'
                    },
                    'content': {
                        template: '<div ng-lazyinclude="demandListGrid" module="\'demand\'"></div>'
                    }
                }
            },

                demandCommonTab = {
                    name: 'tabPage1C.demandCommonTab',
                    url: '/demands/:demandid/common',
                    views: {
                        'tabbar': {
                            template: '<div ng-lazyinclude="demandTabs" module="\'demand\'"></div>'
                        },
                        'content': {
                            template: '<div ng-lazyinclude="demandCommonTab" module="\'demand\'"></div>'
                        }
                    }
                },

                demandOrdersTab = {
                    name: 'tabPage2C.demandOrdersTab',
                    url: '/demands/:demandid/orders',
                    views: {
                        'tabbar': {
                            template: '<div ng-lazyinclude="demandTabs" module="\'demand\'"></div>'
                        },
                        'sidebar': {
                            template: '<div ng-lazyinclude="demandOrdersTabFilter" module="\'demand\'">'
                        },
                        'content': {
                            template: '<div ng-lazyinclude="demandOrdersTabGrid" module="\'demand\'">'
                        }
                    }
                };

            $stateProvider
                .state(demandList)
                .state(demandCommonTab)
                .state(demandOrdersTab);

        }
    ])