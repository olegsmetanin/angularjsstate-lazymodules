angular.module('core', ['ui.state', 'lazyinclude'])
    .config(['$routeProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider',
        function($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.hashPrefix('!');
            $urlRouterProvider.otherwise("/demand")
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
    ]);