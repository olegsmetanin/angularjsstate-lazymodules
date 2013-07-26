angular.module('core', ['ui.state', 'lazyinclude'])
    .config(['$routeProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider',
        function($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.hashPrefix('!');
            $urlRouterProvider.otherwise("/")

            var page1C = {
                name: "page1C",
                abstract: true,
                templateUrl: 'page1C'
            },
                page2C = {
                    name: "page2C",
                    abstract: true,
                    templateUrl: 'page2C'
                },
                tabPage1C = {
                    name: "tabPage1C",
                    abstract: true,
                    templateUrl: 'tabPage1C'
                },
                tabPage2C = {
                    name: "tabPage2C",
                    abstract: true,
                    templateUrl: 'tabPage2C'
                },
                home = {
                    name: 'page1C.home',
                    url: '/',
                    views: {
                        'content': {
                            template: '<div ng-include="\'home\'"></div>'
                        }
                    }
                };

            $stateProvider
                .state(page1C)
                .state(page2C)
                .state(tabPage1C)
                .state(tabPage2C)
                .state(home);

        }
    ])
    .config(['$lazyincludeProvider',
        function($lazyincludeProvider) {
            var modules = [{
                name: 'demand',
                script: 'src/modules/demand/module.js',
                template: 'src/modules/demand/templates.html'
            }, {
                name: 'order',
                script: 'src/modules/order/module.js',
                template: 'src/modules/order/templates.html'
            }, {
                name: 'dependence',
                script: 'src/modules/demand/dependence.js'
            }];

            $lazyincludeProvider.config(modules);
        }
    ])
    .service("pageConfig", ['$rootScope',
        function($rootScope) {
            this.current = {};
            this.setConfig = function(newConfig) {
                this.current = newConfig;
                $rootScope.$broadcast('page:configChanged');
            };
        }
    ])
    .controller('breadcrumbs', ['$scope', 'pageConfig',
        function($scope, $pageConfig) {
            $scope.current = $pageConfig.current.breadcrumb;
            $scope.$on('page:configChanged', function() {
                $scope.current = $pageConfig.current.breadcrumb;
            });
        }
    ])
    .directive("tabbar", function() {
        return function($scope, element, attrs) {
            var tabs = $scope.tabs,
                html = '* ';
            for (var i = 0; i < tabs.length; i++) {
                html += '<span><a href="#!'+tabs[i].url+'">' + tabs[i].name + '</a> *<span>'
            }
            element.html(html);
        }
    })

