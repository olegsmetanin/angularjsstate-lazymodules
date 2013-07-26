angular.module('demand', [])
    .service("demandService", ['$rootScope',
        function($rootScope) {
            this.getDemands = function(filter) {
                return {
                    demands: [{
                        id: 1,
                        name: 'Demand1'
                    }, {
                        id: 2,
                        name: 'Demand2'
                    }, {
                        id: 3,
                        name: 'Demand3'
                    }, {
                        id: 4,
                        name: 'Demand4'
                    }, {
                        id: 5,
                        name: 'Demand5'
                    }]
                }
            }
        }
    ])
    .controller('demandListGridCtrl', ['$scope', 'demandService', 'pageConfig',
        function($scope, $demandService, $pageConfig) {
            $pageConfig.setConfig({
                breadcrumb: [{
                    name: 'Demands',
                    url: '/demands'
                }]
            });
            $scope.demands = $demandService.getDemands({}).demands;
        }
    ])
    .controller('demandTabsCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {
            $scope.tabs = [{
                name: 'Common',
                url: '/demands/' + $stateParams.demandid + '/common'
            }, {
                name: 'Orders',
                url: '/demands/' + $stateParams.demandid + '/orders'
            }];
        }
    ])
    .controller('demandCommonTabCtrl', ['$scope', '$stateParams', 'pageConfig',
        function($scope, $stateParams, $pageConfig) {
            var demandid = $stateParams.demandid;

            $pageConfig.setConfig({
                breadcrumb: [{
                        name: 'Demands',
                        url: '/demands'
                    }, {
                        name: demandid,
                        url: '/demands/' + demandid + '/common'
                    }

                ]
            });
            $scope.demandid = demandid;
        }
    ])