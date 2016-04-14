angular.module('ualib', [
        'oc.lazyLoad',
        'ualib.computers'
    ])

    .config(['$routeProvider', '$ocLazyLoadProvider', function($routeProvider, $ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            modules: [
                {
                    name: 'angular.filter',
                    files: ['//cdnjs.cloudflare.com/ajax/libs/angular-filter/0.5.8/angular-filter.min.js']
                },
                {
                    name: 'monospaced.mousewheel',
                    files: [
                        'vendor/hamster.js',
                        'vendor/mousewheel.js'
                    ]
                }
            ]
        });

    }]);