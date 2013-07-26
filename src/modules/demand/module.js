angular.module('demand', ['dependence'])
    .controller('demandlist', ['$scope',
        function($scope) {
            $scope.items = ["A", "List", "Of", "Items"];
        }
    ])