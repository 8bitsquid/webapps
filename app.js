angular.module('ualib', [
    'ngRoute',
    '<%=pkg.name%>.templates',
    'ualib.ui',
    'hours',
    'oneSearch',
    'ualib.staffdir'
])

    .config(['$routeProvider', function($routeProvider, $location) {
        /**
         * Register Bento Box display route with ngRoute's $routeProvider
         */
        $routeProvider
            .when('/home', {
                templateUrl: '../assets/js/_ualib-home.tpl.html'
            })
            .otherwise({
                redirectTo: '/home'
            });

        $routeProvider
            .when('/libraries/:lib', {
                templateUrl: '../assets/js/_ualib-libraries.tpl.html'
            });
    }])

    .run(['$routeParams', '$location', '$rootScope', function($routeParams, $location, $rootScope){
        $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
            $rootScope.appClass = $location.path().split('/')[1];
            console.log('Current route name: ' + $location.path().split('/'));
            // Get all URL parameter
            console.log($routeParams);
        });
    }]);
