angular.module('ualib.computers.admin', [
    'ualib.computers.mapsDirective',
    'ualib.computers.service'
])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/computers/admin/:building/:floor', {
                reloadOnSearch: false,
                resolve: {
                    mapdata: ['Computers', '$route', function(Computers, $route){
                        return Computers.init($route.current.params, {noRefresh: true});
                    }]
                },
                templateUrl: 'admin/admin.tpl.html',
                controller: 'ComputersAdminCtrl'
            });
    }])

    .controller('ComputersAdminCtrl', ['$scope', 'Computers', '$mapObjects', function($scope, Computers, $mapObjects){
        $scope.mapdata = Computers;
        $scope.mapObjects = $mapObjects;

    }]);