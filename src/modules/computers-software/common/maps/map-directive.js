angular.module('ualib.computers.mapsDirective', [
    'ualib.computers.maps',
    'ualib.computers.mapTools',
    'ualib.computers.service'
])

    .directive('map', ['$maps', '$mapTools','Computers', '$timeout', '$window',  function($maps, $mapTools, Computers, $timeout, $window){
        return{
            restrict: 'EA',
            replace: true,
            template: '<canvas id="map" class="map" ng-class="mapTools.current" msd-wheel="mapTools.zoom($event, $delta)"></canvas>',
            link: function(scope, elm){
                
                scope.mapTools = $mapTools;

                $maps.init({
                    src: 'http://wwwdev.lib.ua.edu/' + scope.mapdata.buildings[0].floors[0].image.url,
                    canvas: elm[0], 
                    objects: {
                        desktops: scope.mapdata.buildings[0].floors[0].desktops,
                        equipment: scope.mapdata.buildings[0].floors[0].equipment
                    }
                }).then(function(){
                    scope.mapTools.init();
                });

                scope.reset = function(){
                    $maps.setDefaults();
                    $maps.draw();
                    //$mapTools.zoomSlider.init();
                };


                /*scope.$on('detail-toggle', function(){
                 $timeout(function(){
                 $maps.refactor({width: detailElm.offsetWidth});
                 }, 100);
                 });

                 scope.reset = function(){
                 $maps.setDefaults();
                 $maps.draw();
                 $mapTools.zoomSlider.init();
                 };

                 scope.mouseZoom = function(event, delta){
                 if (zooming){
                 scope.mapTools.current = delta > 0 ? 'zoom-in' : 'zoom-out';
                 scope.mapTools.zoom(event, delta);
                 }
                 };*/

                angular.element($window).bind('resize', function(){
                    $maps.resizeCanvas();
                    $maps.resizeImage();
                    $maps.posImage();
                    $maps.draw();
                });

            }
        };
    }]);

