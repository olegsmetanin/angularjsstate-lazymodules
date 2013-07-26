angular.module('order', [])
    .controller('orderlist', ['$scope',
        function($scope) {
            $scope.things = ["A", "Set", "Of", "Things"];
        }
    ])