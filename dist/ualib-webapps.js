angular.module('computersSoftware.templates', ['admin/admin.tpl.html', 'common/maps/map.tpl.html', 'signage/signage.tpl.html']);

angular.module("admin/admin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin.tpl.html",
    "<nav class=\"navbar navbar-default\">\n" +
    "    <div class=\"container\">\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.undo()\">\n" +
    "                    <span class=\"fa fa-reply\"></span> Undo\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.redo()\">\n" +
    "                    <span class=\"fa fa-share\"></span> Redo\n" +
    "                </button>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <ul class=\"nav navbar-nav\" ng-show=\"mapTools.current == 'selector'\">\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.helper('hAlignCenter')\">\n" +
    "                    <span class=\"fa fa-align-center\"></span> Horizontal Align Center\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.helper('vAlignCenter')\">\n" +
    "                    <span class=\"fa fa-align-center fa-rotate-90\"></span> Vertical Align Center\n" +
    "                </button>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-1\">\n" +
    "        <ul class=\"nav nav-pills nav-stacked\">\n" +
    "            <li ng-class=\"{active: mapTools.current == 'selector'}\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"mapTools.select('selector')\">\n" +
    "                    <span class=\"fa fa-fw fa-crosshairs\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li ng-class=\"{active: mapTools.current == 'move'}\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"mapTools.select('move')\">\n" +
    "                    <span class=\"fa fa-fw fa-arrows\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li ng-class=\"{active: mapTools.current == 'move'}\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"mapTools.select('rotate')\">\n" +
    "                    <span class=\"fa fa-fw fa-repeat\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default\" ng-click=\"reset()\">\n" +
    "                    <span class=\"fa fa-fw fa-refresh\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-8\" style=\"height: 600px;\">\n" +
    "        <map></map>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-3\">\n" +
    "        <div style=\"height: 400px\">\n" +
    "            <div style=\"height: 70%\">\n" +
    "                <div class=\"list-group\" style=\"height: 100%; overflow-y: auto\">\n" +
    "                    <a href=\"#\" class=\"list-group-item\" ng-repeat=\"object in mapObjects.state\">\n" +
    "                        {{object.name}}\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("common/maps/map.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/maps/map.tpl.html",
    "<canvas id=\"map\" class=\"map\"></canvas>");
}]);

angular.module("signage/signage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("signage/signage.tpl.html",
    "<header class=\"page-row\">\n" +
    "    <nav class=\"navbar navbar-static-top navbar-mega\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"navbar-header\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Floor {{computers.buildings[0].floors[0].name}}</strong>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"navbar-header navbar-right\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Available Computers:</strong>\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    {{computers.buildings[0].available.desktops}}\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "</header>\n" +
    "\n" +
    "<div class=\"wrap page-row page-row-expanded comp-signage-body\">\n" +
    "    <canvas id=\"asset_image\" class=\"asset-image\"></canvas>\n" +
    "</div>\n" +
    "<footer class=\"page-row\">\n" +
    "    <nav class=\"navbar navbar-static-bottom navbar-mega\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"nav navbar-nav\">\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    <img src=\"ualib-computers-qr.jpg\" style=\"height: 50px;\"/>\n" +
    "\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    For computer availability in all libraries<br> visit <a href=\"#\">www.lib.ua.edu/computers</a>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"nav navbar-nav navbar-right\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Apple:</strong>\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    <span class=\"apple available\"></span> available<br> <span class=\"apple taken\"></span> taken\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"nav navbar-nav navbar-right\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Windows:</strong>\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    <span class=\"windows available\"></span> available<br> <span class=\"windows taken\"></span> taken\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "</footer>\n" +
    "");
}]);

angular.module('computersSoftware.templates', ['admin/admin.tpl.html', 'common/maps/map.tpl.html', 'signage/signage.tpl.html']);

angular.module("admin/admin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin.tpl.html",
    "<nav class=\"navbar navbar-default\">\n" +
    "    <div class=\"container\">\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.undo()\">\n" +
    "                    <span class=\"fa fa-reply\"></span> Undo\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.redo()\">\n" +
    "                    <span class=\"fa fa-share\"></span> Redo\n" +
    "                </button>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <ul class=\"nav navbar-nav\" ng-show=\"mapTools.current == 'selector'\">\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.helper('hAlignCenter')\">\n" +
    "                    <span class=\"fa fa-align-center\"></span> Horizontal Align Center\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.helper('vAlignCenter')\">\n" +
    "                    <span class=\"fa fa-align-center fa-rotate-90\"></span> Vertical Align Center\n" +
    "                </button>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-1\">\n" +
    "        <ul class=\"nav nav-pills nav-stacked\">\n" +
    "            <li ng-class=\"{active: mapTools.current == 'selector'}\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"mapTools.select('selector')\">\n" +
    "                    <span class=\"fa fa-fw fa-crosshairs\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li ng-class=\"{active: mapTools.current == 'move'}\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"mapTools.select('move')\">\n" +
    "                    <span class=\"fa fa-fw fa-arrows\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li ng-class=\"{active: mapTools.current == 'move'}\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"mapTools.select('rotate')\">\n" +
    "                    <span class=\"fa fa-fw fa-repeat\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default\" ng-click=\"reset()\">\n" +
    "                    <span class=\"fa fa-fw fa-refresh\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-8\" style=\"height: 600px;\">\n" +
    "        <map></map>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-3\">\n" +
    "        <div style=\"height: 400px\">\n" +
    "            <div style=\"height: 70%\">\n" +
    "                <div class=\"list-group\" style=\"height: 100%; overflow-y: auto\">\n" +
    "                    <a href=\"#\" class=\"list-group-item\" ng-repeat=\"object in mapObjects.state\">\n" +
    "                        {{object.name}}\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("common/maps/map.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/maps/map.tpl.html",
    "<canvas id=\"map\" class=\"map\"></canvas>");
}]);

angular.module("signage/signage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("signage/signage.tpl.html",
    "<header class=\"page-row\">\n" +
    "    <nav class=\"navbar navbar-static-top navbar-mega\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"navbar-header\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Floor {{computers.buildings[0].floors[0].name}}</strong>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"navbar-header navbar-right\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Available Computers:</strong>\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    {{computers.buildings[0].available.desktops}}\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "</header>\n" +
    "\n" +
    "<div class=\"wrap page-row page-row-expanded comp-signage-body\">\n" +
    "    <canvas id=\"asset_image\" class=\"asset-image\"></canvas>\n" +
    "</div>\n" +
    "<footer class=\"page-row\">\n" +
    "    <nav class=\"navbar navbar-static-bottom navbar-mega\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"nav navbar-nav\">\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    <img src=\"ualib-computers-qr.jpg\" style=\"height: 50px;\"/>\n" +
    "\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    For computer availability in all libraries<br> visit <a href=\"#\">www.lib.ua.edu/computers</a>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"nav navbar-nav navbar-right\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Apple:</strong>\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    <span class=\"apple available\"></span> available<br> <span class=\"apple taken\"></span> taken\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"nav navbar-nav navbar-right\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Windows:</strong>\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    <span class=\"windows available\"></span> available<br> <span class=\"windows taken\"></span> taken\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "</footer>\n" +
    "");
}]);

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
                    }],
                    loadDeps: ['$ocLazyLoad', function($ocLazyLoad){
                        return $ocLazyLoad.load([
                            'monospaced.mousewheel',
                            'angular.filter'
                        ])
                    }]
                },
                templateUrl: 'admin/admin.tpl.html',
                controller: 'ComputersAdminCtrl'
            });
    }])

    .controller('ComputersAdminCtrl', ['$scope', 'Computers', '$mapObjects', function($scope, Computers, $mapObjects){
        $scope.mapdata = Computers;
        $scope.mapObjects = $mapObjects;

        $scope.$on('mapObjectsUpdated', function(){
            $scope.mapObjects.state = $mapObjects.state;
        })
    }]);
angular.module('ualib.computers.service', [
    'ualib.computers.factory'
])

    .service('Computers', ['compSoftFactory', '$timeout', '$q', '$rootScope', function(compSoftFactory, $timeout, $q, $rootScope){
        var _params = {};
        var _options = {
            noRefresh: false
        };
        var _refresh = null;
        var _cancel = false;
        var self = this;

        this.buildings = [];
        
        this.init = function(params, opt){
            var deferred = $q.defer();
            params = angular.isDefined(params) ? params : {};
            _params = params;
            opt = angular.isDefined(opt) ? opt : {};


            angular.extend(_options, opt);

            if (_refresh) {
                self.cancelRefresh();
            }
            
            getComputers().$promise.then(function(data){
                self.buildings = angular.copy(data.buildings);
                if (_options.noRefresh === false){
                    refresh();
                }
                deferred.resolve();
            });

            return deferred.promise;
        };

        this.cancelRefresh = function(){
            var _cancel = true;
        };
        
        function refresh(){
            if (!_cancel){
                _refresh = $timeout(function(){
                    getComputers().$promise.then(function(data){
                        self.buildings = angular.copy(data.buildings);
                        refresh();
                    });
                }, 8000);
            }
            else {
                $timeout.cancel(_refresh);
            }
        }
        
        function getComputers(){
            if (_params.hasOwnProperty('floor')){
                return compSoftFactory.floors().get(_params, function(data){
                    return data;
                }, function(data, status, headers, config) {
                    console.log('ERROR: Computers and Software');
                    console.log({
                        data: data,
                        status: status,
                        headers: headers,
                        config: config
                    });
                });
            }
            else {
                return compSoftFactory.buildings().get(_params, function(data){
                    return data;
                }, function(data, status, headers, config) {
                    console.log('ERROR: Computers and Software');
                    console.log({
                        data: data,
                        status: status,
                        headers: headers,
                        config: config
                    });
                });
            }
        }
        
        

    }]);
angular.module('ualib.computers.factory', [])

    .factory('compSoftFactory', ['$resource', '$http', function($resource, $http){
        var URL = 'https://wwwdev.lib.ua.edu/softwareList/api/buildings';

        function getTotalAvail(array, prop){
            prop = angular.isUndefined(prop) ? 'desktops' : prop;
            return array.filter(function(item){
                return prop === 'desktops' ? item.status === 3 : item.available === 0;
            }).length;
        }

        /**
         * @ngdoc function
         * @name databases.databasesFactory#appendTransform
         * @methodOf databases.databasesFactory
         *
         * @param {Array.<function()>} defaults Default `Array` of `$http` transform response transform functions from Angular - will always be `$http.defaults.transformResponse`
         * @param {function()} transform Transform function to extend the `$http.defaults.transformResponse` Array with.
         *
         * @description
         * <span class="label label-warning">Private</span>
         * Extend the default responseTransform array - Straight from Angular 1.2.8 API docs - https://docs.angularjs.org/api/ng/service/$http#overriding-the-default-transformations-per-request
         *
         * Doing this allows custom modifications of the JSON response from the API to be cached after the initial `$resource` call, instead of
         * performing these modifications on every `$digest()` cycle (e.g., make modifications once, instead of every time the databases list is refreshed).
         *
         * @returns {Array.<function()>} Returns the new `transformResponse` Array
         */
        function appendTransform(defaults, transform) {

            // We can't guarantee that the default transformation is an array
            defaults = angular.isArray(defaults) ? defaults : [defaults];
            //console.log(defaults.concat(transform));
            // Append the new transformation to the defaults
            return defaults.concat(transform);
        }

        function buildingsTransform(data){
            var b = angular.fromJson(data);
            var buildings = [];

            angular.forEach(b.buildings, function(building, idx){
                var desktops = 0;
                var laptops = 0;

                for (var i = 0, len = building.floors.length; i < len; i++){
                    var floor = {available: {}};

                    if (building.floors[i].hasOwnProperty('desktops')){
                        var d = getTotalAvail(building.floors[i].desktops, 'desktops');
                        floor.available.desktops = d;
                        desktops += d;
                    }

                    if (building.floors[i].hasOwnProperty('laptops')){
                        var l = getTotalAvail(building.floors[i].laptops, 'laptops');
                        floor.available.laptops = l;
                        laptops += l;
                    }

                    building.floors[i] = angular.extend({}, building.floors[i], floor);

                }

                building.available = {
                    desktops: desktops,
                    laptops: laptops
                };

                buildings.push(building);
            });

            b.buildings = buildings;
            return b;
        }

        return {
            buildings: function(){

                return $resource(URL, {}, {
                    get: {
                        method: 'GET',
                        transformResponse: appendTransform($http.defaults.transformResponse, buildingsTransform)
                    }
                });
            },
            floors: function(){
                return $resource(URL + '/:building/floors/:floor', {}, {
                    get: {
                        method: 'GET',
                        transformResponse: appendTransform($http.defaults.transformResponse, buildingsTransform)
                    }
                });
            }
        };
    }]);
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


angular.module('ualib.computers.mapObjects', [])

    .service('$mapObjects', ['$maps', '$q', '$filter', '$rootScope', function($maps, $q, $filter, $rootScope){
        var self = this;
        var undoStates = [];
        var redoStates = [];
        this.selected = [];
        this.state = [];
       

        this.selectBounds = {};

        this.init = function(objects){
            self.state = collapseObjects(objects);
        };

        this.select = function(func){
            self.state = self.state.map(function(o){
                o.selected = func(o);
                return o;
            });
            return self.getSelected();
        };

        this.getSelected = function(){
            return self.selected.length > 0 ? self.selected : self.state.filter(function(obj){
                return obj && obj.hasOwnProperty('selected') && obj.selected;
            });
        };

        this.update = function(objects){
            objects = objects ? objects : self.getSelected();
            self.state = angular.extend([], objects, self.state);
            var expanded = expandObjects(self.state);
            angular.copy(expanded, $maps.objects);
            console.log(angular.copy($maps.objects));
            $rootScope.$broadcast('mapObjectsUpdated');

        };

        this.recordState = function(objects){
            objects = objects ? objects : self.getSelected();
            undoStates.push(angular.copy(objects));
        };

        this.undo = function(){
            console.log('undo????');
            if (undoStates.length > 0){
                console.log('UNDOOOO!!!!');
                redoStates.push(self.getSelected());
                var undo = undoStates.pop();
                self.update(undo);
            }
        };

        this.redo = function(){
            if (redoState.length > 0){
                undoStates.push(angular.copy(self.state));
                angular.copy(redoStates.pop(), self.state);
            }
        };

        this.centerOfSelection = function(objects){
            objects = objects ? objects : self.getSelected();

            var maxX = getMax(objects, 'x');
            var maxY = getMax(objects, 'y');
            var minX = getMin(objects, 'x');
            var minY = getMin(objects, 'y');

            //self.selectBounds = self.boundsOfSelection(objects);

            var vcenter = ((maxX - minX)/2) + minX;
            var hcenter = ((maxY - minY)/2) + minY;
            return {
                x: vcenter,
                y: hcenter
            };
        };

        this.setSelectionBounds = function(objects){
            objects = objects ? objects : self.getSelected();

            var maxX = getMax(objects, 'x');
            var maxY = getMax(objects, 'y');
            var minX = getMin(objects, 'x');
            var minY = getMin(objects, 'y');

            self.selectBounds = {x: minX, y: minY, w: (maxX - minX + 15), h: (maxY - minY + 15)};
        };

        function getSelected(obj){
            if (angular.isObject(obj)){
                return getSelected()
            }

            return obj.filter(function(comp){
                return comp.selected;
            });
        }

        // Adopted from http://stackoverflow.com/questions/11149843/get-largest-value-in-multi-dimensional-array-javascript-or-coffeescript
        function getMax(objects, coord){
            return objects.reduce(function(max, arr) {
                return max >= parseInt(arr.coordinates[coord]) ? max : parseInt(arr.coordinates[coord]);
            }, -Infinity);
        }

        function getMin(objects, coord){
            return objects.reduce(function(min, arr) {
                return arr.coordinates[coord] < min ? arr.coordinates[coord] : min;
            }, Infinity);
        }

        function collapseObjects(objects){
            var collapsed = [];
            for (var obj in objects){
                if (objects.hasOwnProperty(obj)){
                    var newObj = objects[obj].map(function(o){
                        o.oType = obj;
                        return o;
                    });
                    collapsed = collapsed.concat(newObj);
                }
            }
            return collapsed;
        }

        function expandObjects(objects){
            var expanded = {};
            objects.map(function(obj){
                var newObj = {};
                for (var p in obj){
                    if (obj.hasOwnProperty(p) && p !== 'oType'){
                        newObj[p] = obj[p];
                    }
                }
                if (expanded.hasOwnProperty(obj.oType)){
                    expanded[obj.oType].push(newObj);
                }
                else {
                    expanded[obj.oType] = [];
                    expanded[obj.oType].push(newObj);
                }
            });
            return expanded;
        }

    }]);
angular.module('ualib.computers.mapTools', [
    'ualib.computers.mapObjects'
])
    .service('$mapTools', ['$maps', '$mapObjects', '$document', '$window', '$location', function MapTools($maps, $mapObjects, $document, $window, $location){
        var self = this;
        var offset;
        var tool;
        var canvas;
        this.canvasEventPause = false;

        this.current;
        this.prev;

        this.mapUndoStates = [];

        this.init = function(){
            var defaultTool = $location.search().tool || 'selector';
            $mapObjects.init($maps.objects);
            canvas = angular.element($maps.canvas);
            offset = getOffset($maps.canvas);
            self.select(defaultTool);
            readyCanvas();
        };

        this.destroy = function(){
            canvas.unbind();
            $document.unbind();
        };

        this.select = function(newTool){
            if (newTool !== self.current){
                self.prev = self.current;
                tool = new Tools[newTool]();
                self.current = newTool;
                $location.search('tool', self.current);
                $location.replace();
            }
        };

        this.prevTool = function(){
            if (angular.isDefined(self.prev)) self.select(self.prev);
        };

        this.helper = function(helper){
            if (angular.isObject(tool) && tool.hasOwnProperty(helper) && angular.isFunction(tool[helper])){
                tool[helper]();
            }
        };

        function readyCanvas(){
            canvas.bind('mousedown', function(ev){
                canvasEvent(ev);
                $document.bind('mousedown', toolCursor);
                $document.bind('mouseup', toolCursor);
                $document.bind('mouseup', toolChangedImage);
            });
            /*canvas.bind('mousemove', function(ev){
             ev = self.mouseLoc(ev);
             if (mouseInBounds($maps.x, $maps.y, $maps.x2, $maps.y2, ev.mx, ev.my)){
             if (!hover) hover = true;
             angular.element('body').addClass(self.current);
             canvas.bind('mousedown', canvasEvent);
             }
             else if (hover){
             hover = false;
             angular.element('body').removeClass(self.current);
             }
             });
             canvas.bind('mouseup', toolChangedImage);*/
        }

        function toolCursor(ev){
            if (ev.type == 'mousedown')
                $document.find('body').addClass(self.current);
            else if (ev.type == 'mouseup'){
                $document.find('body').removeClass(self.current);
                $document.unbind('mousedown', toolCursor);
            }
        }

        function canvasEvent(ev){
            if (!self.canvasEventPause){
                ev = self.mouseLoc(ev); //set current mouse (mx, my)
                var func = tool[ev.type];
                if (func){
                    func(ev);
                }
            }
            return ev.preventDefault() && false;
        }

        function toolChangedImage(){
            $maps.changed = true;
            canvas.unbind('mouseup', toolChangedImage);
        }

        this.mouseLoc = function(ev){
            ev.mx = ev.pageX - offset.left;
            ev.my = ev.pageY - offset.top;
            return ev;
        };

        function getBounds(x, y, w, h){
            var x1, y1, x2, y2;

            if (w < 0){
                x1 = x + w;
                x2 = x;
            }
            else {
                x1 = x;
                x2 = x + w;
            }

            if (h < 0){
                y1 = y + h;
                y2 = y;
            }
            else {
                y1 = y;
                y2 = y + h;
            }

            return {x1: x1, y1: y1, x2: x2, y2: y2};

        }

        function mouseInBounds(x1, y1, w, h, mx, my){
            var x2 = x1+w;
            var y2 = y1+h;
            //console.log(mx +' > '+ x1 +' && '+ my +' > '+ y1 +' && '+ mx +' < '+ x2 +' && '+ my +' < '+ y2);
            return (mx > x1 && my > y1 && mx < x2 && my < y2);
        }

        function inRectBounds(x1, y1, w1, h1, rx, ry, rw, rh){
            // get x2,y2 of object being checked
            var x2 = w1+x1;
            var y2 = h1+y1;
            // get bounds of select rect
            var bounds = getBounds(rx, ry, rw, rh);
            //console.log(bounds.x1 +' < '+ x1 +' && '+ bounds.y1 +' < '+ y1 +' && '+ bounds.x2 +' > '+ x2 +' && '+ bounds.y2 +' > '+ y2);
            return (bounds.x1 < x1 && bounds.y1 < y1 && bounds.x2 > x2 && bounds.y2 > y2);

        }

        function getOffset(elm){
            var rect = elm.getBoundingClientRect();
            //return {top: rect.top, left: rect.left};
            var doc = elm.ownerDocument;
            var docElem = doc.documentElement;

            return {
                top: rect.top + $window.pageYOffset - docElem.clientTop,
                left: rect.left + $window.pageXOffset - docElem.clientLeft
            };
        }

        this.map = function(val, xMin, xMax, yMin, yMax) {
            return (val - xMax) / (xMin - xMax) * (yMax - yMin) + yMin;
        };

        //Buttons - these are not selectable tools, but perform a single redefined function
        this.zoomSlider = {
            height: 0,
            pos: 0,
            elm: null,
            init: function(){
                self.zoomSlider.height = self.zoomSlider.elm.offsetHeight-2;
                self.zoomSlider.defaultPos();
            },
            defaultPos: function(){ self.zoomSlider.pos = self.map($maps.scalar, $maps.maxScale, $maps.minScale, self.zoomSlider.height, 0); }
        };

        this.zoom = function(ev, delta, deltaX, deltaY){
            // extend event variable with mouse location
            ev = self.mouseLoc(ev);
            var slideBarY;
            var dScale;
            var zoomCenter = true;

            if (!delta){
                var pos = ev.my - self.zoomSlider.height;
                dScale = self.map(pos, 0, self.zoomSlider.height, $maps.minScale, $maps.maxScale);
                delta = dScale - $maps.scalar;
            }
            else{
                delta = delta/10;
                dScale = Math.round(($maps.scalar + delta) * 1e1) / 1e1;

                zoomCenter = mouseInBounds($maps.x, $maps.y, $maps.x2, $maps.y2, ev.mx, ev.my) ? false : true;
            }

            // If mouse is not over the image, zoom from the center of the image instead of mouse location (ev.mx, ev.my)
            if (zoomCenter){
                ev.mx = ($maps.x + $maps.x2)/2;
                ev.my = ($maps.y + $maps.y2)/2;
            }
            //var clipScale = Math.min(Math.max($maps.minScale, dScale), $maps.maxScale);
            //If dScale is within scale limits
            if (!(dScale < $maps.minScale || dScale > $maps.maxScale)){

                $maps.x = ev.mx - ($maps.scalar + delta) * ((ev.mx-$maps.x) / $maps.scalar);
                $maps.y = ev.my - ($maps.scalar + delta) * ((ev.my-$maps.y) / $maps.scalar);

                $maps.scalar = dScale;
                $maps.width = $maps.image.width*$maps.scalar;
                $maps.height = $maps.image.height*$maps.scalar;

                $maps.draw();
            }
            //set slideBarY position
            slideBarY = self.map(dScale, $maps.maxScale, $maps.minScale, self.zoomSlider.height, 0);

            //zoom slider bar position - always changes, but differently depending on mousewheel or slider zoom
            self.zoomSlider.pos = Math.min(Math.max(slideBarY, 0), self.zoomSlider.height);
            return ev.preventDefault() && false;
        };

        this.undo = function(){
            $mapObjects.undo();
            $maps.draw();
        };

        this.redo = function(){
            $mapObjects.redo();
            $maps.draw();
        };


        //Tools - only one can be selected at a time
        var Tools = {
            selector: function () {
                var self = this;
                var mox = 0;
                var moy = 0;
                var ox = 0;
                var oy = 0;
                var offsets = [];
                var selected = [];
                var selectRectOffset = {};

                this.mousedown = function (ev) {
                    mox = ev.mx;
                    moy = ev.my;

                    ox = (ev.mx - $maps.x) / $maps.scalar;
                    oy = (ev.my - $maps.y) / $maps.scalar;

                    if (($maps.objects.hasOwnProperty('selectRect') && !mouseInBounds($maps.objects.selectRect.x, $maps.objects.selectRect.y, $maps.objects.selectRect.w, $maps.objects.selectRect.h, ox, oy))
                        || !$maps.objects.hasOwnProperty('selectRect')) {
                        selected = $mapObjects.select(function (obj) {
                            return mouseInBounds(obj.coordinates.x, obj.coordinates.y, 10, 10, (ev.mx - $maps.x) / $maps.scalar, (ev.my - $maps.y) / $maps.scalar);
                        });
                    }
                    else {
                        selectRectOffset = {
                            x: ev.mx - $maps.objects.selectRect.x,
                            y: ev.my - $maps.objects.selectRect.y
                        }
                    }

                    offsets = selected.map(function (obj) {
                        return {
                            x: ev.mx - obj.coordinates.x,
                            y: ev.my - obj.coordinates.y
                        }
                    });

                    $maps.draw();

                    $document.bind('mousemove', canvasEvent);
                    $document.bind('mouseup', canvasEvent);

                };

                this.mousemove = function (ev) {
                    var dx = (ev.mx - mox) / $maps.scalar;
                    var dy = (ev.my - moy) / $maps.scalar;

                    if (selected.length > 0) {
                        if ($maps.objects.hasOwnProperty('selectRect')) {
                            console.log(selectRectOffset);
                            $maps.objects.selectRect.x = mox + dx - selectRectOffset.x;
                            $maps.objects.selectRect.y = moy + dy - selectRectOffset.y;
                        }
                        selected = selected.map(function (obj, i) {
                            obj.coordinates.x = (mox + dx - offsets[i].x);
                            obj.coordinates.y = (moy + dy - offsets[i].y);
                            return obj;
                        });

                        $mapObjects.update(selected);
                    }
                    else {
                        if (!$maps.objects.hasOwnProperty('selectRect')) {

                            $maps.objects.selectRect = {
                                x: (ev.mx - $maps.x) / $maps.scalar,
                                y: (ev.my - $maps.y) / $maps.scalar,
                                w: 0,
                                h: 0
                            };
                        }
                        $maps.objects.selectRect.w = dx;
                        $maps.objects.selectRect.h = dy;

                        $mapObjects.select(function (obj) {
                            return inRectBounds(obj.coordinates.x, obj.coordinates.y, 10, 10, $maps.objects.selectRect.x, $maps.objects.selectRect.y, $maps.objects.selectRect.w, $maps.objects.selectRect.h);
                        });
                    }

                    $maps.draw();
                };

                this.mouseup = function () {
                    if ($maps.objects.hasOwnProperty('selectRect') && selected.length < 1) {
                        selected = $mapObjects.getSelected();
                        if (selected.length > 0) {
                            $mapObjects.setSelectionBounds(selected);
                            console.log($mapObjects.selectBounds);
                            angular.copy($mapObjects.selectBounds, $maps.objects.selectRect);
                        }
                        else {
                            var objects = {};
                            for (var prop in $maps.objects) {
                                if ($maps.objects.hasOwnProperty(prop) && prop !== 'selectRect') {
                                    objects[prop] = $maps.objects[prop];
                                }
                            }
                            $maps.objects = objects;
                        }
                    }

                    $mapObjects.recordState(selected);
                    $maps.draw();
                    $document.unbind('mousemove', canvasEvent);
                    $document.unbind('mouseup', canvasEvent);
                };

                /**
                 * noncanvas event sub tools for the selector tool
                 */

                this.hAlignCenter = function () {
                    var selected = $mapObjects.getSelected();
                    var center = $mapObjects.centerOfSelection(selected);

                    for (var i = 0, len = selected.length; i < len; i++) {
                        selected[i].coordinates.x = center.x;
                    }

                    $mapObjects.merge(selected);
                    $maps.draw();
                };

                this.vAlignCenter = function () {
                    var selected = $mapObjects.getSelected();
                    var center = $mapObjects.centerOfSelection(selected);

                    for (var i = 0, len = selected.length; i < len; i++) {
                        selected[i].coordinates.y = center.y;
                    }

                    $mapObjects.merge(selected);
                    $maps.draw();
                };
            },
            move: function () {
                var mox = 0;
                var moy = 0;
                var ox = 0;
                var oy = 0;

                this.mousedown = function (ev) {
                    mox = ev.mx;
                    moy = ev.my;

                    ox = ev.mx - $maps.x;
                    oy = ev.my - $maps.y;

                    $document.bind('mousemove', canvasEvent);
                    $document.bind('mouseup', canvasEvent);
                };

                this.mousemove = function (ev) {
                    var dx = ev.mx - mox;
                    var dy = ev.my - moy;

                    $maps.x = mox + dx - ox;
                    $maps.y = moy + dy - oy;

                    $maps.draw();
                };

                this.mouseup = function () {
                    $document.unbind('mousemove', canvasEvent);
                    $document.unbind('mouseup', canvasEvent);
                }
            },
            rotate: function () {
                var cX;
                var cY;
                var clickAngle;

                this.mousedown = function (ev) {
                    cX = $maps.x + ($maps.width / 2);
                    cY = $maps.y + ($maps.height / 2);
                    clickAngle = getAngle(cX, cY, ev.mx, ev.my) - $maps.angle;

                    $document.bind('mousemove', canvasEvent);
                    $document.bind('mouseup', canvasEvent);
                };

                this.mousemove = function (ev) {
                    $maps.angle = getAngle(cX, cY, ev.mx, ev.my) - clickAngle;
                    $maps.draw();
                };

                this.mouseup = function (ev) {
                    $document.unbind('mousemove', canvasEvent);
                    $document.unbind('mouseup', canvasEvent);
                };

                /**
                 * angle helper function
                 */
                function getAngle(cX, cY, mx, my) {
                    var angle = Math.atan2(my - cY, mx - cX);
                    return angle;
                }
            }
        };

    }]);
angular.module('ualib.computers.maps', [])

    .factory('loadMap', ['$q', function($q){
        return function(src){
            var deferred = $q.defer();
            var map = new Image();

            map.onload = function(){
                deferred.resolve(map);
            };
            map.src = src;

            return deferred.promise;
        };
    }])

    .service('$maps', ['$q', 'mapStyles', function($q, styles){
        var self = this;
        this.canvas = null;
        this.ctx = null;
        this.image = null;
        this.changed = false;
        this.prev = {};
        this.objects = {};

        this.margin = {
            width: 0,
            height: 0
        };
        this.offset = {
            width: 0,
            height: 0
        };

        this.x = 0;
        this.y = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.width = 0;
        this.height = 0;
        this.scalar = 0.4;
        this.minScale = 0.2;
        this.maxScale = 1.4;
        this.angle = 0;

        this.setDefaults = function(){
            self.resizeCanvas();
            self.changed = false;
            self.x = 0;
            self.y = 0;
            self.angle = 0;
            self.setScale();
            self.resizeImage();
            self.center();
            //console.log({changed: self.changed});
        };

        this.refactor = function(offset){
            if (offset.width !== self.width){
                self.setOffset(offset);
                if (!self.changed){
                    self.setDefaults();
                }
                else{
                    var x = self.x + (self.prev.canvas_width - self.canvas.width)/2;
                    var y = self.y + (self.prev.canvas_height - self.canvas.height)/2;
                    if (x > 0 && (self.x+self.width) < (self.canvas.width - self.margin.width - self.offset.width)) {
                        self.x = x;
                    }
                    if (y > 0 && (self.y+self.height) < (self.canvas.height - self.margin.height - self.offset.height)) {
                        self.y = y;
                    }
                    //if ((self.x - dx) > 0 && dx < (self.x+self.width)) self.x -= dx;
                    //if ((self.y - dy) > 0 && dy < (self.y+self.height)) self.y -= dy;

                }
                self.draw();
            }
        };

        this.init = function(params){
            var deferred = $q.defer();
            if (params.src){
                if (params.offset) {
                    self.setOffset(params.offset);
                }
                if (params.objects){
                    self.objects = angular.copy(params.objects);
                }
                self.canvas = params.canvas;
                self.ctx = self.canvas.getContext('2d');
                self.loadImage(params.src).then(function(){
                    self.setDefaults();
                    self.draw();
                    deferred.resolve();
                });
            }
            else{
                deferred.reject('No image src given.');
            }
            return deferred.promise;
        };

        this.setOffset = function(offset){
            if (self.offset.width !== offset.width) {
                self.offset.width = offset.width;
            }
        };

        this.loadImage = function(src){
            var deferred = $q.defer();
            self.image = new Image();

            self.image.onload = function(){
                deferred.resolve();
            };
            self.image.src = src;
            return deferred.promise;
        };

        this.draw = function(){
            //console.log(self.scalar);
            // Clear the canvas
            self.clear();
            // Save matrix state
            self.ctx.save();

            // Translate matrix to (x, y) then scale matrix
            self.ctx.translate(self.x, self.y);
            self.ctx.scale(self.scalar, self.scalar);

            // Translate matrix to (x, y) values representing the distance to the image's center
            self.ctx.translate(self.image.width/2, self.image.height/2);
            // Rotate matrix
            self.ctx.rotate(self.angle);
            // Translate matrix back to state before it was translated to the (x, y) matching the image's center
            self.ctx.translate(-self.image.width/2, -self.image.height/2);

            // Draw image to canvas
            self.ctx.drawImage(self.image, 0, 0);
            self.drawObjects();

            // Restore matrix to it's saved state.
            // If the matrix was not saved, then altered, then restored
            // 	for every draw, then the transforms would stack (i.e., without save/restore
            //	and image at scale 1, scaled to 1.2, then scale to 1 would result in a final scale
            // 	of 1.2 - because (1 * 1.2) * 1 = 1.2
            self.ctx.restore();

            self.x2 = self.x + self.width;
            self.y2 = self.y + self.height;
        };

        this.drawObjects = function(){

            if (self.objects.hasOwnProperty('desktops')){
                self.ctx.fillStyle = styles.desktops.available.color;

                for (var i = 0, len = self.objects.desktops.length; i < len; i++){
                    var comp = self.objects.desktops[i];
                    var x = comp.coordinates.x;
                    var y = comp.coordinates.y;

                    self.ctx.save();
                    self.ctx.translate(x, y);
                    if (comp.status !== 3){
                        self.ctx.fillStyle = styles.desktops.taken.color;
                    }

                    if (comp.os === 1){
                        self.ctx.fillRect(2, 2, 13, 13);
                        /*if (parseInt(comp.monitors) > 1){
                            self.ctx.fillRect(x+5, y-5, 15, 15);
                            self.ctx.clearRect(x+5, y, 10, 10);
                        }*/
                        if (comp.selected){
                            self.ctx.lineWidth = 5;
                            self.ctx.strokeStyle = '#00ff00';
                            self.ctx.strokeRect(0, 0, 13, 13);
                        };
                    }
                    else if (comp.os === 2){

                        self.ctx.beginPath();
                        self.ctx.arc(7, 7, 7, 0, 2*Math.PI);
                        self.ctx.fill();
                        if (comp.selected){
                            self.ctx.lineWidth = 5;
                            self.ctx.strokeStyle = '#00ff00';
                            self.ctx.stroke();
                        }
                    }
                    self.ctx.restore();

                }
            }
            if (self.objects.hasOwnProperty('selectRect')){
                var rect = angular.copy(self.objects.selectRect);
                self.ctx.save();
                self.ctx.setLineDash([6, 4]);
                self.ctx.strokeStyle = '#333';
                self.ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
                self.ctx.restore();

            }
        };

        this.setScale = function(){
            var width_ratio = (self.canvas.width - self.margin.width - self.offset.width) / self.image.width;
            var height_ratio = (self.canvas.height - self.margin.height - self.offset.height) / self.image.height;
            self.scalar = Math.min(width_ratio, height_ratio);
            /*console.log({w_ratio: width_ratio, h_ratio: height_ratio});
             console.log('width_ratio = ('+self.canvas.width+' - ('+self.margin.width+' + '+self.offset.width+')) / '+self.image.width);
             console.log('height_ratio = ('+self.canvas.height+' - ('+self.margin.height+' + '+self.offset.height+')) / '+self.image.height);*/
        };

        this.clear = function(){
            self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
        };

        this.resizeCanvas = function(){
            self.prev.canvas_width = self.canvas.width;
            self.prev.canvas_height = self.canvas.height;

            self.canvas.style.width = '100%';
            self.canvas.style.height = '100%';

            self.canvas.width = self.canvas.offsetWidth;
            self.canvas.height = self.canvas.offsetHeight;

        };

        this.resizeImage = function(){
            self.width = self.image.width*self.scalar;
            self.height = self.image.height*self.scalar;
        };

        this.center = function(){
            self.x = ((self.canvas.width - self.offset.width) - self.width)/2;
            self.y = ((self.canvas.height) - self.height)/2;
        };

        this.scaleXY = function(newWidth, newHeight){
            self.x = newWidth/self.canvas.width;
            self.y = newHeight/self.canvas.height;
        };

        this.posImage = function(){
            if (!self.changed){
                self.center();
            }
            else{
                self.x *= self.canvas.width/self.prev.canvas_width;
                self.y *= self.canvas.height/self.prev.canvas_height;
            }
        };

        this.getSelectedObjects = function(){
            self.objects.filter(function(comp){
                return comp.selected;
            });
        };
    }]);

angular.module('ualib.computers', [
    'ngRoute',
    'ngResource',
    'computersSoftware.templates',
    'ualib.computers.admin',
    'ualib.computers.signage'
])

    .value('mapStyles', {
        desktops: {
            available: {
                shape: 'fillRect',
                color: '#61a661'
            },
            taken: {
                shape: 'strokeRect',
                color: '#eee'
            }
        }
    });
angular.module('ualib.computers.signage', [
    'ualib.computers.service',
    'ualib.computers.maps'
])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/computers/signage/:building/:floor', {
                reloadOnSearch: false,
                resolve: {
                    floors: ['Computers', '$route', function(Computers, $route){

                        return Computers.init($route.current.params).then(function(){
                            return true;
                        });
                        /*console.log($route);
                        return CFF.floors().get($route.current.params, function(data){
                            return data;
                        }, function(data, status, headers, config) {
                            console.log('ERROR: Computers and Software');
                            console.log({
                                data: data,
                                status: status,
                                headers: headers,
                                config: config
                            });
                        });*/
                    }]
                },
                templateUrl: 'signage/signage.tpl.html',
                controller: 'SignageCtrl'
            });
    }])

    .controller('SignageCtrl', ['$scope', 'Computers', function($scope, Computers){
        $scope.computers = Computers;

    }])

    .directive('assetImage', ['$maps', '$timeout', '$window',  function($maps, $timeout, $window){
        return{
            restrict: 'AC',
            link: function(scope, elm){


                var scalar = 0.27;
                var yOffset = 60;
                var floor = parseInt(scope.computers.buildings[0].floors[0].name);

                if (floor === 3){
                    scalar = 0.14;
                    yOffset = 85;
                }
                else if(floor === 2){
                    scalar = 0.14;
                    yOffset = 85;
                }

                $maps.init({
                 src: 'http://wwwdev.lib.ua.edu/' + scope.computers.buildings[0].floors[0].image.url,
                 canvas: elm[0], objects: {desktops: scope.computers.buildings[0].floors[0].desktops},
                 width: scope.computers.buildings[0].floors[0].image.width,
                 height: scope.computers.buildings[0].floors[0].image.height,
                 scalar: scalar,
                 yOffset: yOffset
                 });

                angular.element($window).bind('resize', function(){
                    $maps.resizeCanvas();
                    $maps.setScale();
                    $maps.resizeImage();
                    $maps.posImage();
                    $maps.draw();
                });

                scope.$on('$destroy', function(){
                    angular.element($window).unbind('resize');
                });

            }
        };
    }]);
angular.module('computersSoftware.templates', ['admin/admin.tpl.html', 'common/maps/map.tpl.html', 'signage/signage.tpl.html']);

angular.module("admin/admin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin.tpl.html",
    "<nav class=\"navbar navbar-default\">\n" +
    "    <div class=\"container\">\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.undo()\">\n" +
    "                    <span class=\"fa fa-reply\"></span> Undo\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.redo()\">\n" +
    "                    <span class=\"fa fa-share\"></span> Redo\n" +
    "                </button>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <ul class=\"nav navbar-nav\" ng-show=\"mapTools.current == 'selector'\">\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.helper('hAlignCenter')\">\n" +
    "                    <span class=\"fa fa-align-center\"></span> Horizontal Align Center\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.helper('vAlignCenter')\">\n" +
    "                    <span class=\"fa fa-align-center fa-rotate-90\"></span> Vertical Align Center\n" +
    "                </button>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-1\">\n" +
    "        <ul class=\"nav nav-pills nav-stacked\">\n" +
    "            <li ng-class=\"{active: mapTools.current == 'selector'}\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"mapTools.select('selector')\">\n" +
    "                    <span class=\"fa fa-fw fa-crosshairs\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li ng-class=\"{active: mapTools.current == 'move'}\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"mapTools.select('move')\">\n" +
    "                    <span class=\"fa fa-fw fa-arrows\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li ng-class=\"{active: mapTools.current == 'move'}\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"mapTools.select('rotate')\">\n" +
    "                    <span class=\"fa fa-fw fa-repeat\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default\" ng-click=\"reset()\">\n" +
    "                    <span class=\"fa fa-fw fa-refresh\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-8\" style=\"height: 600px;\">\n" +
    "        <map></map>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-3\">\n" +
    "        <div style=\"height: 400px\">\n" +
    "            <div style=\"height: 70%\">\n" +
    "                <div class=\"list-group\" style=\"height: 100%; overflow-y: auto\">\n" +
    "                    <a href=\"#\" class=\"list-group-item\" ng-repeat=\"object in mapObjects.state\">\n" +
    "                        {{object.name}}\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("common/maps/map.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/maps/map.tpl.html",
    "<canvas id=\"map\" class=\"map\"></canvas>");
}]);

angular.module("signage/signage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("signage/signage.tpl.html",
    "<header class=\"page-row\">\n" +
    "    <nav class=\"navbar navbar-static-top navbar-mega\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"navbar-header\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Floor {{computers.buildings[0].floors[0].name}}</strong>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"navbar-header navbar-right\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Available Computers:</strong>\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    {{computers.buildings[0].available.desktops}}\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "</header>\n" +
    "\n" +
    "<div class=\"wrap page-row page-row-expanded comp-signage-body\">\n" +
    "    <canvas id=\"asset_image\" class=\"asset-image\"></canvas>\n" +
    "</div>\n" +
    "<footer class=\"page-row\">\n" +
    "    <nav class=\"navbar navbar-static-bottom navbar-mega\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"nav navbar-nav\">\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    <img src=\"ualib-computers-qr.jpg\" style=\"height: 50px;\"/>\n" +
    "\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    For computer availability in all libraries<br> visit <a href=\"#\">www.lib.ua.edu/computers</a>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"nav navbar-nav navbar-right\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Apple:</strong>\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    <span class=\"apple available\"></span> available<br> <span class=\"apple taken\"></span> taken\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"nav navbar-nav navbar-right\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Windows:</strong>\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    <span class=\"windows available\"></span> available<br> <span class=\"windows taken\"></span> taken\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "</footer>\n" +
    "");
}]);

angular.module('computersSoftware.templates', ['admin/admin.tpl.html', 'common/maps/map.tpl.html', 'signage/signage.tpl.html']);

angular.module("admin/admin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin.tpl.html",
    "<nav class=\"navbar navbar-default\">\n" +
    "    <div class=\"container\">\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.undo()\">\n" +
    "                    <span class=\"fa fa-reply\"></span> Undo\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.redo()\">\n" +
    "                    <span class=\"fa fa-share\"></span> Redo\n" +
    "                </button>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <ul class=\"nav navbar-nav\" ng-show=\"mapTools.current == 'selector'\">\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.helper('hAlignCenter')\">\n" +
    "                    <span class=\"fa fa-align-center\"></span> Horizontal Align Center\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.helper('vAlignCenter')\">\n" +
    "                    <span class=\"fa fa-align-center fa-rotate-90\"></span> Vertical Align Center\n" +
    "                </button>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-1\">\n" +
    "        <ul class=\"nav nav-pills nav-stacked\">\n" +
    "            <li ng-class=\"{active: mapTools.current == 'selector'}\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"mapTools.select('selector')\">\n" +
    "                    <span class=\"fa fa-fw fa-crosshairs\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li ng-class=\"{active: mapTools.current == 'move'}\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"mapTools.select('move')\">\n" +
    "                    <span class=\"fa fa-fw fa-arrows\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li ng-class=\"{active: mapTools.current == 'move'}\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"mapTools.select('rotate')\">\n" +
    "                    <span class=\"fa fa-fw fa-repeat\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default\" ng-click=\"reset()\">\n" +
    "                    <span class=\"fa fa-fw fa-refresh\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-8\" style=\"height: 600px;\">\n" +
    "        <map></map>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-3\">\n" +
    "        <div style=\"height: 400px\">\n" +
    "            <div style=\"height: 70%\">\n" +
    "                <div class=\"list-group\" style=\"height: 100%; overflow-y: auto\">\n" +
    "                    <a href=\"#\" class=\"list-group-item\" ng-repeat=\"object in mapObjects.state\">\n" +
    "                        {{object.name}}\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("common/maps/map.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/maps/map.tpl.html",
    "<canvas id=\"map\" class=\"map\"></canvas>");
}]);

angular.module("signage/signage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("signage/signage.tpl.html",
    "<header class=\"page-row\">\n" +
    "    <nav class=\"navbar navbar-static-top navbar-mega\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"navbar-header\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Floor {{computers.buildings[0].floors[0].name}}</strong>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"navbar-header navbar-right\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Available Computers:</strong>\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    {{computers.buildings[0].available.desktops}}\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "</header>\n" +
    "\n" +
    "<div class=\"wrap page-row page-row-expanded comp-signage-body\">\n" +
    "    <canvas id=\"asset_image\" class=\"asset-image\"></canvas>\n" +
    "</div>\n" +
    "<footer class=\"page-row\">\n" +
    "    <nav class=\"navbar navbar-static-bottom navbar-mega\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"nav navbar-nav\">\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    <img src=\"ualib-computers-qr.jpg\" style=\"height: 50px;\"/>\n" +
    "\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    For computer availability in all libraries<br> visit <a href=\"#\">www.lib.ua.edu/computers</a>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"nav navbar-nav navbar-right\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Apple:</strong>\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    <span class=\"apple available\"></span> available<br> <span class=\"apple taken\"></span> taken\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"nav navbar-nav navbar-right\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Windows:</strong>\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    <span class=\"windows available\"></span> available<br> <span class=\"windows taken\"></span> taken\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "</footer>\n" +
    "");
}]);

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
                    }],
                    loadDeps: ['$ocLazyLoad', function($ocLazyLoad){
                        return $ocLazyLoad.load([
                            'monospaced.mousewheel',
                            'angular.filter'
                        ])
                    }]
                },
                templateUrl: 'admin/admin.tpl.html',
                controller: 'ComputersAdminCtrl'
            });
    }])

    .controller('ComputersAdminCtrl', ['$scope', 'Computers', '$mapObjects', function($scope, Computers, $mapObjects){
        $scope.mapdata = Computers;
        $scope.mapObjects = $mapObjects;

        $scope.$on('mapObjectsUpdated', function(){
            $scope.mapObjects.state = $mapObjects.state;
        })
    }]);
angular.module('ualib.computers.service', [
    'ualib.computers.factory'
])

    .service('Computers', ['compSoftFactory', '$timeout', '$q', '$rootScope', function(compSoftFactory, $timeout, $q, $rootScope){
        var _params = {};
        var _options = {
            noRefresh: false
        };
        var _refresh = null;
        var _cancel = false;
        var self = this;

        this.buildings = [];
        
        this.init = function(params, opt){
            var deferred = $q.defer();
            params = angular.isDefined(params) ? params : {};
            _params = params;
            opt = angular.isDefined(opt) ? opt : {};


            angular.extend(_options, opt);

            if (_refresh) {
                self.cancelRefresh();
            }
            
            getComputers().$promise.then(function(data){
                self.buildings = angular.copy(data.buildings);
                if (_options.noRefresh === false){
                    refresh();
                }
                deferred.resolve();
            });

            return deferred.promise;
        };

        this.cancelRefresh = function(){
            var _cancel = true;
        };
        
        function refresh(){
            if (!_cancel){
                _refresh = $timeout(function(){
                    getComputers().$promise.then(function(data){
                        self.buildings = angular.copy(data.buildings);
                        refresh();
                    });
                }, 8000);
            }
            else {
                $timeout.cancel(_refresh);
            }
        }
        
        function getComputers(){
            if (_params.hasOwnProperty('floor')){
                return compSoftFactory.floors().get(_params, function(data){
                    return data;
                }, function(data, status, headers, config) {
                    console.log('ERROR: Computers and Software');
                    console.log({
                        data: data,
                        status: status,
                        headers: headers,
                        config: config
                    });
                });
            }
            else {
                return compSoftFactory.buildings().get(_params, function(data){
                    return data;
                }, function(data, status, headers, config) {
                    console.log('ERROR: Computers and Software');
                    console.log({
                        data: data,
                        status: status,
                        headers: headers,
                        config: config
                    });
                });
            }
        }
        
        

    }]);
angular.module('ualib.computers.factory', [])

    .factory('compSoftFactory', ['$resource', '$http', function($resource, $http){
        var URL = 'https://wwwdev.lib.ua.edu/softwareList/api/buildings';

        function getTotalAvail(array, prop){
            prop = angular.isUndefined(prop) ? 'desktops' : prop;
            return array.filter(function(item){
                return prop === 'desktops' ? item.status === 3 : item.available === 0;
            }).length;
        }

        /**
         * @ngdoc function
         * @name databases.databasesFactory#appendTransform
         * @methodOf databases.databasesFactory
         *
         * @param {Array.<function()>} defaults Default `Array` of `$http` transform response transform functions from Angular - will always be `$http.defaults.transformResponse`
         * @param {function()} transform Transform function to extend the `$http.defaults.transformResponse` Array with.
         *
         * @description
         * <span class="label label-warning">Private</span>
         * Extend the default responseTransform array - Straight from Angular 1.2.8 API docs - https://docs.angularjs.org/api/ng/service/$http#overriding-the-default-transformations-per-request
         *
         * Doing this allows custom modifications of the JSON response from the API to be cached after the initial `$resource` call, instead of
         * performing these modifications on every `$digest()` cycle (e.g., make modifications once, instead of every time the databases list is refreshed).
         *
         * @returns {Array.<function()>} Returns the new `transformResponse` Array
         */
        function appendTransform(defaults, transform) {

            // We can't guarantee that the default transformation is an array
            defaults = angular.isArray(defaults) ? defaults : [defaults];
            //console.log(defaults.concat(transform));
            // Append the new transformation to the defaults
            return defaults.concat(transform);
        }

        function buildingsTransform(data){
            var b = angular.fromJson(data);
            var buildings = [];

            angular.forEach(b.buildings, function(building, idx){
                var desktops = 0;
                var laptops = 0;

                for (var i = 0, len = building.floors.length; i < len; i++){
                    var floor = {available: {}};

                    if (building.floors[i].hasOwnProperty('desktops')){
                        var d = getTotalAvail(building.floors[i].desktops, 'desktops');
                        floor.available.desktops = d;
                        desktops += d;
                    }

                    if (building.floors[i].hasOwnProperty('laptops')){
                        var l = getTotalAvail(building.floors[i].laptops, 'laptops');
                        floor.available.laptops = l;
                        laptops += l;
                    }

                    building.floors[i] = angular.extend({}, building.floors[i], floor);

                }

                building.available = {
                    desktops: desktops,
                    laptops: laptops
                };

                buildings.push(building);
            });

            b.buildings = buildings;
            return b;
        }

        return {
            buildings: function(){

                return $resource(URL, {}, {
                    get: {
                        method: 'GET',
                        transformResponse: appendTransform($http.defaults.transformResponse, buildingsTransform)
                    }
                });
            },
            floors: function(){
                return $resource(URL + '/:building/floors/:floor', {}, {
                    get: {
                        method: 'GET',
                        transformResponse: appendTransform($http.defaults.transformResponse, buildingsTransform)
                    }
                });
            }
        };
    }]);
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


angular.module('ualib.computers.mapObjects', [])

    .service('$mapObjects', ['$maps', '$q', '$filter', '$rootScope', function($maps, $q, $filter, $rootScope){
        var self = this;
        var undoStates = [];
        var redoStates = [];
        this.selected = [];
        this.state = [];
       

        this.selectBounds = {};

        this.init = function(objects){
            self.state = collapseObjects(objects);
        };

        this.select = function(func){
            self.state = self.state.map(function(o){
                o.selected = func(o);
                return o;
            });
            return self.getSelected();
        };

        this.getSelected = function(){
            return self.selected.length > 0 ? self.selected : self.state.filter(function(obj){
                return obj && obj.hasOwnProperty('selected') && obj.selected;
            });
        };

        this.update = function(objects){
            objects = objects ? objects : self.getSelected();
            self.state = angular.extend([], objects, self.state);
            var expanded = expandObjects(self.state);
            angular.copy(expanded, $maps.objects);
            console.log(angular.copy($maps.objects));
            $rootScope.$broadcast('mapObjectsUpdated');

        };

        this.recordState = function(objects){
            objects = objects ? objects : self.getSelected();
            undoStates.push(angular.copy(objects));
        };

        this.undo = function(){
            console.log('undo????');
            if (undoStates.length > 0){
                console.log('UNDOOOO!!!!');
                redoStates.push(self.getSelected());
                var undo = undoStates.pop();
                self.update(undo);
            }
        };

        this.redo = function(){
            if (redoState.length > 0){
                undoStates.push(angular.copy(self.state));
                angular.copy(redoStates.pop(), self.state);
            }
        };

        this.centerOfSelection = function(objects){
            objects = objects ? objects : self.getSelected();

            var maxX = getMax(objects, 'x');
            var maxY = getMax(objects, 'y');
            var minX = getMin(objects, 'x');
            var minY = getMin(objects, 'y');

            //self.selectBounds = self.boundsOfSelection(objects);

            var vcenter = ((maxX - minX)/2) + minX;
            var hcenter = ((maxY - minY)/2) + minY;
            return {
                x: vcenter,
                y: hcenter
            };
        };

        this.setSelectionBounds = function(objects){
            objects = objects ? objects : self.getSelected();

            var maxX = getMax(objects, 'x');
            var maxY = getMax(objects, 'y');
            var minX = getMin(objects, 'x');
            var minY = getMin(objects, 'y');

            self.selectBounds = {x: minX, y: minY, w: (maxX - minX + 15), h: (maxY - minY + 15)};
        };

        function getSelected(obj){
            if (angular.isObject(obj)){
                return getSelected()
            }

            return obj.filter(function(comp){
                return comp.selected;
            });
        }

        // Adopted from http://stackoverflow.com/questions/11149843/get-largest-value-in-multi-dimensional-array-javascript-or-coffeescript
        function getMax(objects, coord){
            return objects.reduce(function(max, arr) {
                return max >= parseInt(arr.coordinates[coord]) ? max : parseInt(arr.coordinates[coord]);
            }, -Infinity);
        }

        function getMin(objects, coord){
            return objects.reduce(function(min, arr) {
                return arr.coordinates[coord] < min ? arr.coordinates[coord] : min;
            }, Infinity);
        }

        function collapseObjects(objects){
            var collapsed = [];
            for (var obj in objects){
                if (objects.hasOwnProperty(obj)){
                    var newObj = objects[obj].map(function(o){
                        o.oType = obj;
                        return o;
                    });
                    collapsed = collapsed.concat(newObj);
                }
            }
            return collapsed;
        }

        function expandObjects(objects){
            var expanded = {};
            objects.map(function(obj){
                var newObj = {};
                for (var p in obj){
                    if (obj.hasOwnProperty(p) && p !== 'oType'){
                        newObj[p] = obj[p];
                    }
                }
                if (expanded.hasOwnProperty(obj.oType)){
                    expanded[obj.oType].push(newObj);
                }
                else {
                    expanded[obj.oType] = [];
                    expanded[obj.oType].push(newObj);
                }
            });
            return expanded;
        }

    }]);
angular.module('ualib.computers.mapTools', [
    'ualib.computers.mapObjects'
])
    .service('$mapTools', ['$maps', '$mapObjects', '$document', '$window', '$location', function MapTools($maps, $mapObjects, $document, $window, $location){
        var self = this;
        var offset;
        var tool;
        var canvas;
        this.canvasEventPause = false;

        this.current;
        this.prev;

        this.mapUndoStates = [];

        this.init = function(){
            var defaultTool = $location.search().tool || 'selector';
            $mapObjects.init($maps.objects);
            canvas = angular.element($maps.canvas);
            offset = getOffset($maps.canvas);
            self.select(defaultTool);
            readyCanvas();
        };

        this.destroy = function(){
            canvas.unbind();
            $document.unbind();
        };

        this.select = function(newTool){
            if (newTool !== self.current){
                self.prev = self.current;
                tool = new Tools[newTool]();
                self.current = newTool;
                $location.search('tool', self.current);
                $location.replace();
            }
        };

        this.prevTool = function(){
            if (angular.isDefined(self.prev)) self.select(self.prev);
        };

        this.helper = function(helper){
            if (angular.isObject(tool) && tool.hasOwnProperty(helper) && angular.isFunction(tool[helper])){
                tool[helper]();
            }
        };

        function readyCanvas(){
            canvas.bind('mousedown', function(ev){
                canvasEvent(ev);
                $document.bind('mousedown', toolCursor);
                $document.bind('mouseup', toolCursor);
                $document.bind('mouseup', toolChangedImage);
            });
            /*canvas.bind('mousemove', function(ev){
             ev = self.mouseLoc(ev);
             if (mouseInBounds($maps.x, $maps.y, $maps.x2, $maps.y2, ev.mx, ev.my)){
             if (!hover) hover = true;
             angular.element('body').addClass(self.current);
             canvas.bind('mousedown', canvasEvent);
             }
             else if (hover){
             hover = false;
             angular.element('body').removeClass(self.current);
             }
             });
             canvas.bind('mouseup', toolChangedImage);*/
        }

        function toolCursor(ev){
            if (ev.type == 'mousedown')
                $document.find('body').addClass(self.current);
            else if (ev.type == 'mouseup'){
                $document.find('body').removeClass(self.current);
                $document.unbind('mousedown', toolCursor);
            }
        }

        function canvasEvent(ev){
            if (!self.canvasEventPause){
                ev = self.mouseLoc(ev); //set current mouse (mx, my)
                var func = tool[ev.type];
                if (func){
                    func(ev);
                }
            }
            return ev.preventDefault() && false;
        }

        function toolChangedImage(){
            $maps.changed = true;
            canvas.unbind('mouseup', toolChangedImage);
        }

        this.mouseLoc = function(ev){
            ev.mx = ev.pageX - offset.left;
            ev.my = ev.pageY - offset.top;
            return ev;
        };

        function getBounds(x, y, w, h){
            var x1, y1, x2, y2;

            if (w < 0){
                x1 = x + w;
                x2 = x;
            }
            else {
                x1 = x;
                x2 = x + w;
            }

            if (h < 0){
                y1 = y + h;
                y2 = y;
            }
            else {
                y1 = y;
                y2 = y + h;
            }

            return {x1: x1, y1: y1, x2: x2, y2: y2};

        }

        function mouseInBounds(x1, y1, w, h, mx, my){
            var x2 = x1+w;
            var y2 = y1+h;
            //console.log(mx +' > '+ x1 +' && '+ my +' > '+ y1 +' && '+ mx +' < '+ x2 +' && '+ my +' < '+ y2);
            return (mx > x1 && my > y1 && mx < x2 && my < y2);
        }

        function inRectBounds(x1, y1, w1, h1, rx, ry, rw, rh){
            // get x2,y2 of object being checked
            var x2 = w1+x1;
            var y2 = h1+y1;
            // get bounds of select rect
            var bounds = getBounds(rx, ry, rw, rh);
            //console.log(bounds.x1 +' < '+ x1 +' && '+ bounds.y1 +' < '+ y1 +' && '+ bounds.x2 +' > '+ x2 +' && '+ bounds.y2 +' > '+ y2);
            return (bounds.x1 < x1 && bounds.y1 < y1 && bounds.x2 > x2 && bounds.y2 > y2);

        }

        function getOffset(elm){
            var rect = elm.getBoundingClientRect();
            //return {top: rect.top, left: rect.left};
            var doc = elm.ownerDocument;
            var docElem = doc.documentElement;

            return {
                top: rect.top + $window.pageYOffset - docElem.clientTop,
                left: rect.left + $window.pageXOffset - docElem.clientLeft
            };
        }

        this.map = function(val, xMin, xMax, yMin, yMax) {
            return (val - xMax) / (xMin - xMax) * (yMax - yMin) + yMin;
        };

        //Buttons - these are not selectable tools, but perform a single redefined function
        this.zoomSlider = {
            height: 0,
            pos: 0,
            elm: null,
            init: function(){
                self.zoomSlider.height = self.zoomSlider.elm.offsetHeight-2;
                self.zoomSlider.defaultPos();
            },
            defaultPos: function(){ self.zoomSlider.pos = self.map($maps.scalar, $maps.maxScale, $maps.minScale, self.zoomSlider.height, 0); }
        };

        this.zoom = function(ev, delta, deltaX, deltaY){
            // extend event variable with mouse location
            ev = self.mouseLoc(ev);
            var slideBarY;
            var dScale;
            var zoomCenter = true;

            if (!delta){
                var pos = ev.my - self.zoomSlider.height;
                dScale = self.map(pos, 0, self.zoomSlider.height, $maps.minScale, $maps.maxScale);
                delta = dScale - $maps.scalar;
            }
            else{
                delta = delta/10;
                dScale = Math.round(($maps.scalar + delta) * 1e1) / 1e1;

                zoomCenter = mouseInBounds($maps.x, $maps.y, $maps.x2, $maps.y2, ev.mx, ev.my) ? false : true;
            }

            // If mouse is not over the image, zoom from the center of the image instead of mouse location (ev.mx, ev.my)
            if (zoomCenter){
                ev.mx = ($maps.x + $maps.x2)/2;
                ev.my = ($maps.y + $maps.y2)/2;
            }
            //var clipScale = Math.min(Math.max($maps.minScale, dScale), $maps.maxScale);
            //If dScale is within scale limits
            if (!(dScale < $maps.minScale || dScale > $maps.maxScale)){

                $maps.x = ev.mx - ($maps.scalar + delta) * ((ev.mx-$maps.x) / $maps.scalar);
                $maps.y = ev.my - ($maps.scalar + delta) * ((ev.my-$maps.y) / $maps.scalar);

                $maps.scalar = dScale;
                $maps.width = $maps.image.width*$maps.scalar;
                $maps.height = $maps.image.height*$maps.scalar;

                $maps.draw();
            }
            //set slideBarY position
            slideBarY = self.map(dScale, $maps.maxScale, $maps.minScale, self.zoomSlider.height, 0);

            //zoom slider bar position - always changes, but differently depending on mousewheel or slider zoom
            self.zoomSlider.pos = Math.min(Math.max(slideBarY, 0), self.zoomSlider.height);
            return ev.preventDefault() && false;
        };

        this.undo = function(){
            $mapObjects.undo();
            $maps.draw();
        };

        this.redo = function(){
            $mapObjects.redo();
            $maps.draw();
        };


        //Tools - only one can be selected at a time
        var Tools = {
            selector: function () {
                var self = this;
                var mox = 0;
                var moy = 0;
                var ox = 0;
                var oy = 0;
                var offsets = [];
                var selected = [];
                var selectRectOffset = {};

                this.mousedown = function (ev) {
                    mox = ev.mx;
                    moy = ev.my;

                    ox = (ev.mx - $maps.x) / $maps.scalar;
                    oy = (ev.my - $maps.y) / $maps.scalar;

                    if (($maps.objects.hasOwnProperty('selectRect') && !mouseInBounds($maps.objects.selectRect.x, $maps.objects.selectRect.y, $maps.objects.selectRect.w, $maps.objects.selectRect.h, ox, oy))
                        || !$maps.objects.hasOwnProperty('selectRect')) {
                        selected = $mapObjects.select(function (obj) {
                            return mouseInBounds(obj.coordinates.x, obj.coordinates.y, 10, 10, (ev.mx - $maps.x) / $maps.scalar, (ev.my - $maps.y) / $maps.scalar);
                        });
                    }
                    else {
                        selectRectOffset = {
                            x: ev.mx - $maps.objects.selectRect.x,
                            y: ev.my - $maps.objects.selectRect.y
                        }
                    }

                    offsets = selected.map(function (obj) {
                        return {
                            x: ev.mx - obj.coordinates.x,
                            y: ev.my - obj.coordinates.y
                        }
                    });

                    $maps.draw();

                    $document.bind('mousemove', canvasEvent);
                    $document.bind('mouseup', canvasEvent);

                };

                this.mousemove = function (ev) {
                    var dx = (ev.mx - mox) / $maps.scalar;
                    var dy = (ev.my - moy) / $maps.scalar;

                    if (selected.length > 0) {
                        if ($maps.objects.hasOwnProperty('selectRect')) {
                            console.log(selectRectOffset);
                            $maps.objects.selectRect.x = mox + dx - selectRectOffset.x;
                            $maps.objects.selectRect.y = moy + dy - selectRectOffset.y;
                        }
                        selected = selected.map(function (obj, i) {
                            obj.coordinates.x = (mox + dx - offsets[i].x);
                            obj.coordinates.y = (moy + dy - offsets[i].y);
                            return obj;
                        });

                        $mapObjects.update(selected);
                    }
                    else {
                        if (!$maps.objects.hasOwnProperty('selectRect')) {

                            $maps.objects.selectRect = {
                                x: (ev.mx - $maps.x) / $maps.scalar,
                                y: (ev.my - $maps.y) / $maps.scalar,
                                w: 0,
                                h: 0
                            };
                        }
                        $maps.objects.selectRect.w = dx;
                        $maps.objects.selectRect.h = dy;

                        $mapObjects.select(function (obj) {
                            return inRectBounds(obj.coordinates.x, obj.coordinates.y, 10, 10, $maps.objects.selectRect.x, $maps.objects.selectRect.y, $maps.objects.selectRect.w, $maps.objects.selectRect.h);
                        });
                    }

                    $maps.draw();
                };

                this.mouseup = function () {
                    if ($maps.objects.hasOwnProperty('selectRect') && selected.length < 1) {
                        selected = $mapObjects.getSelected();
                        if (selected.length > 0) {
                            $mapObjects.setSelectionBounds(selected);
                            console.log($mapObjects.selectBounds);
                            angular.copy($mapObjects.selectBounds, $maps.objects.selectRect);
                        }
                        else {
                            var objects = {};
                            for (var prop in $maps.objects) {
                                if ($maps.objects.hasOwnProperty(prop) && prop !== 'selectRect') {
                                    objects[prop] = $maps.objects[prop];
                                }
                            }
                            $maps.objects = objects;
                        }
                    }

                    $mapObjects.recordState(selected);
                    $maps.draw();
                    $document.unbind('mousemove', canvasEvent);
                    $document.unbind('mouseup', canvasEvent);
                };

                /**
                 * noncanvas event sub tools for the selector tool
                 */

                this.hAlignCenter = function () {
                    var selected = $mapObjects.getSelected();
                    var center = $mapObjects.centerOfSelection(selected);

                    for (var i = 0, len = selected.length; i < len; i++) {
                        selected[i].coordinates.x = center.x;
                    }

                    $mapObjects.merge(selected);
                    $maps.draw();
                };

                this.vAlignCenter = function () {
                    var selected = $mapObjects.getSelected();
                    var center = $mapObjects.centerOfSelection(selected);

                    for (var i = 0, len = selected.length; i < len; i++) {
                        selected[i].coordinates.y = center.y;
                    }

                    $mapObjects.merge(selected);
                    $maps.draw();
                };
            },
            move: function () {
                var mox = 0;
                var moy = 0;
                var ox = 0;
                var oy = 0;

                this.mousedown = function (ev) {
                    mox = ev.mx;
                    moy = ev.my;

                    ox = ev.mx - $maps.x;
                    oy = ev.my - $maps.y;

                    $document.bind('mousemove', canvasEvent);
                    $document.bind('mouseup', canvasEvent);
                };

                this.mousemove = function (ev) {
                    var dx = ev.mx - mox;
                    var dy = ev.my - moy;

                    $maps.x = mox + dx - ox;
                    $maps.y = moy + dy - oy;

                    $maps.draw();
                };

                this.mouseup = function () {
                    $document.unbind('mousemove', canvasEvent);
                    $document.unbind('mouseup', canvasEvent);
                }
            },
            rotate: function () {
                var cX;
                var cY;
                var clickAngle;

                this.mousedown = function (ev) {
                    cX = $maps.x + ($maps.width / 2);
                    cY = $maps.y + ($maps.height / 2);
                    clickAngle = getAngle(cX, cY, ev.mx, ev.my) - $maps.angle;

                    $document.bind('mousemove', canvasEvent);
                    $document.bind('mouseup', canvasEvent);
                };

                this.mousemove = function (ev) {
                    $maps.angle = getAngle(cX, cY, ev.mx, ev.my) - clickAngle;
                    $maps.draw();
                };

                this.mouseup = function (ev) {
                    $document.unbind('mousemove', canvasEvent);
                    $document.unbind('mouseup', canvasEvent);
                };

                /**
                 * angle helper function
                 */
                function getAngle(cX, cY, mx, my) {
                    var angle = Math.atan2(my - cY, mx - cX);
                    return angle;
                }
            }
        };

    }]);
angular.module('ualib.computers.maps', [])

    .factory('loadMap', ['$q', function($q){
        return function(src){
            var deferred = $q.defer();
            var map = new Image();

            map.onload = function(){
                deferred.resolve(map);
            };
            map.src = src;

            return deferred.promise;
        };
    }])

    .service('$maps', ['$q', 'mapStyles', function($q, styles){
        var self = this;
        this.canvas = null;
        this.ctx = null;
        this.image = null;
        this.changed = false;
        this.prev = {};
        this.objects = {};

        this.margin = {
            width: 0,
            height: 0
        };
        this.offset = {
            width: 0,
            height: 0
        };

        this.x = 0;
        this.y = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.width = 0;
        this.height = 0;
        this.scalar = 0.4;
        this.minScale = 0.2;
        this.maxScale = 1.4;
        this.angle = 0;

        this.setDefaults = function(){
            self.resizeCanvas();
            self.changed = false;
            self.x = 0;
            self.y = 0;
            self.angle = 0;
            self.setScale();
            self.resizeImage();
            self.center();
            //console.log({changed: self.changed});
        };

        this.refactor = function(offset){
            if (offset.width !== self.width){
                self.setOffset(offset);
                if (!self.changed){
                    self.setDefaults();
                }
                else{
                    var x = self.x + (self.prev.canvas_width - self.canvas.width)/2;
                    var y = self.y + (self.prev.canvas_height - self.canvas.height)/2;
                    if (x > 0 && (self.x+self.width) < (self.canvas.width - self.margin.width - self.offset.width)) {
                        self.x = x;
                    }
                    if (y > 0 && (self.y+self.height) < (self.canvas.height - self.margin.height - self.offset.height)) {
                        self.y = y;
                    }
                    //if ((self.x - dx) > 0 && dx < (self.x+self.width)) self.x -= dx;
                    //if ((self.y - dy) > 0 && dy < (self.y+self.height)) self.y -= dy;

                }
                self.draw();
            }
        };

        this.init = function(params){
            var deferred = $q.defer();
            if (params.src){
                if (params.offset) {
                    self.setOffset(params.offset);
                }
                if (params.objects){
                    self.objects = angular.copy(params.objects);
                }
                self.canvas = params.canvas;
                self.ctx = self.canvas.getContext('2d');
                self.loadImage(params.src).then(function(){
                    self.setDefaults();
                    self.draw();
                    deferred.resolve();
                });
            }
            else{
                deferred.reject('No image src given.');
            }
            return deferred.promise;
        };

        this.setOffset = function(offset){
            if (self.offset.width !== offset.width) {
                self.offset.width = offset.width;
            }
        };

        this.loadImage = function(src){
            var deferred = $q.defer();
            self.image = new Image();

            self.image.onload = function(){
                deferred.resolve();
            };
            self.image.src = src;
            return deferred.promise;
        };

        this.draw = function(){
            //console.log(self.scalar);
            // Clear the canvas
            self.clear();
            // Save matrix state
            self.ctx.save();

            // Translate matrix to (x, y) then scale matrix
            self.ctx.translate(self.x, self.y);
            self.ctx.scale(self.scalar, self.scalar);

            // Translate matrix to (x, y) values representing the distance to the image's center
            self.ctx.translate(self.image.width/2, self.image.height/2);
            // Rotate matrix
            self.ctx.rotate(self.angle);
            // Translate matrix back to state before it was translated to the (x, y) matching the image's center
            self.ctx.translate(-self.image.width/2, -self.image.height/2);

            // Draw image to canvas
            self.ctx.drawImage(self.image, 0, 0);
            self.drawObjects();

            // Restore matrix to it's saved state.
            // If the matrix was not saved, then altered, then restored
            // 	for every draw, then the transforms would stack (i.e., without save/restore
            //	and image at scale 1, scaled to 1.2, then scale to 1 would result in a final scale
            // 	of 1.2 - because (1 * 1.2) * 1 = 1.2
            self.ctx.restore();

            self.x2 = self.x + self.width;
            self.y2 = self.y + self.height;
        };

        this.drawObjects = function(){

            if (self.objects.hasOwnProperty('desktops')){
                self.ctx.fillStyle = styles.desktops.available.color;

                for (var i = 0, len = self.objects.desktops.length; i < len; i++){
                    var comp = self.objects.desktops[i];
                    var x = comp.coordinates.x;
                    var y = comp.coordinates.y;

                    self.ctx.save();
                    self.ctx.translate(x, y);
                    if (comp.status !== 3){
                        self.ctx.fillStyle = styles.desktops.taken.color;
                    }

                    if (comp.os === 1){
                        self.ctx.fillRect(2, 2, 13, 13);
                        /*if (parseInt(comp.monitors) > 1){
                            self.ctx.fillRect(x+5, y-5, 15, 15);
                            self.ctx.clearRect(x+5, y, 10, 10);
                        }*/
                        if (comp.selected){
                            self.ctx.lineWidth = 5;
                            self.ctx.strokeStyle = '#00ff00';
                            self.ctx.strokeRect(0, 0, 13, 13);
                        };
                    }
                    else if (comp.os === 2){

                        self.ctx.beginPath();
                        self.ctx.arc(7, 7, 7, 0, 2*Math.PI);
                        self.ctx.fill();
                        if (comp.selected){
                            self.ctx.lineWidth = 5;
                            self.ctx.strokeStyle = '#00ff00';
                            self.ctx.stroke();
                        }
                    }
                    self.ctx.restore();

                }
            }
            if (self.objects.hasOwnProperty('selectRect')){
                var rect = angular.copy(self.objects.selectRect);
                self.ctx.save();
                self.ctx.setLineDash([6, 4]);
                self.ctx.strokeStyle = '#333';
                self.ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
                self.ctx.restore();

            }
        };

        this.setScale = function(){
            var width_ratio = (self.canvas.width - self.margin.width - self.offset.width) / self.image.width;
            var height_ratio = (self.canvas.height - self.margin.height - self.offset.height) / self.image.height;
            self.scalar = Math.min(width_ratio, height_ratio);
            /*console.log({w_ratio: width_ratio, h_ratio: height_ratio});
             console.log('width_ratio = ('+self.canvas.width+' - ('+self.margin.width+' + '+self.offset.width+')) / '+self.image.width);
             console.log('height_ratio = ('+self.canvas.height+' - ('+self.margin.height+' + '+self.offset.height+')) / '+self.image.height);*/
        };

        this.clear = function(){
            self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
        };

        this.resizeCanvas = function(){
            self.prev.canvas_width = self.canvas.width;
            self.prev.canvas_height = self.canvas.height;

            self.canvas.style.width = '100%';
            self.canvas.style.height = '100%';

            self.canvas.width = self.canvas.offsetWidth;
            self.canvas.height = self.canvas.offsetHeight;

        };

        this.resizeImage = function(){
            self.width = self.image.width*self.scalar;
            self.height = self.image.height*self.scalar;
        };

        this.center = function(){
            self.x = ((self.canvas.width - self.offset.width) - self.width)/2;
            self.y = ((self.canvas.height) - self.height)/2;
        };

        this.scaleXY = function(newWidth, newHeight){
            self.x = newWidth/self.canvas.width;
            self.y = newHeight/self.canvas.height;
        };

        this.posImage = function(){
            if (!self.changed){
                self.center();
            }
            else{
                self.x *= self.canvas.width/self.prev.canvas_width;
                self.y *= self.canvas.height/self.prev.canvas_height;
            }
        };

        this.getSelectedObjects = function(){
            self.objects.filter(function(comp){
                return comp.selected;
            });
        };
    }]);

angular.module('ualib.computers', [
    'ngRoute',
    'ngResource',
    'computersSoftware.templates',
    'ualib.computers.admin',
    'ualib.computers.signage'
])

    .value('mapStyles', {
        desktops: {
            available: {
                shape: 'fillRect',
                color: '#61a661'
            },
            taken: {
                shape: 'strokeRect',
                color: '#eee'
            }
        }
    });
angular.module('ualib.computers.signage', [
    'ualib.computers.service',
    'ualib.computers.maps'
])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/computers/signage/:building/:floor', {
                reloadOnSearch: false,
                resolve: {
                    floors: ['Computers', '$route', function(Computers, $route){

                        return Computers.init($route.current.params).then(function(){
                            return true;
                        });
                        /*console.log($route);
                        return CFF.floors().get($route.current.params, function(data){
                            return data;
                        }, function(data, status, headers, config) {
                            console.log('ERROR: Computers and Software');
                            console.log({
                                data: data,
                                status: status,
                                headers: headers,
                                config: config
                            });
                        });*/
                    }]
                },
                templateUrl: 'signage/signage.tpl.html',
                controller: 'SignageCtrl'
            });
    }])

    .controller('SignageCtrl', ['$scope', 'Computers', function($scope, Computers){
        $scope.computers = Computers;

    }])

    .directive('assetImage', ['$maps', '$timeout', '$window',  function($maps, $timeout, $window){
        return{
            restrict: 'AC',
            link: function(scope, elm){


                var scalar = 0.27;
                var yOffset = 60;
                var floor = parseInt(scope.computers.buildings[0].floors[0].name);

                if (floor === 3){
                    scalar = 0.14;
                    yOffset = 85;
                }
                else if(floor === 2){
                    scalar = 0.14;
                    yOffset = 85;
                }

                $maps.init({
                 src: 'http://wwwdev.lib.ua.edu/' + scope.computers.buildings[0].floors[0].image.url,
                 canvas: elm[0], objects: {desktops: scope.computers.buildings[0].floors[0].desktops},
                 width: scope.computers.buildings[0].floors[0].image.width,
                 height: scope.computers.buildings[0].floors[0].image.height,
                 scalar: scalar,
                 yOffset: yOffset
                 });

                angular.element($window).bind('resize', function(){
                    $maps.resizeCanvas();
                    $maps.setScale();
                    $maps.resizeImage();
                    $maps.posImage();
                    $maps.draw();
                });

                scope.$on('$destroy', function(){
                    angular.element($window).unbind('resize');
                });

            }
        };
    }]);
angular.module('computersSoftware.templates', ['admin/admin.tpl.html', 'common/maps/map.tpl.html', 'signage/signage.tpl.html']);

angular.module("admin/admin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin.tpl.html",
    "<nav class=\"navbar navbar-default\">\n" +
    "    <div class=\"container\">\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.undo()\">\n" +
    "                    <span class=\"fa fa-reply\"></span> Undo\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.redo()\">\n" +
    "                    <span class=\"fa fa-share\"></span> Redo\n" +
    "                </button>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <ul class=\"nav navbar-nav\" ng-show=\"mapTools.current == 'selector'\">\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.helper('hAlignCenter')\">\n" +
    "                    <span class=\"fa fa-align-center\"></span> Horizontal Align Center\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.helper('vAlignCenter')\">\n" +
    "                    <span class=\"fa fa-align-center fa-rotate-90\"></span> Vertical Align Center\n" +
    "                </button>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-1\">\n" +
    "        <ul class=\"nav nav-pills nav-stacked\">\n" +
    "            <li ng-class=\"{active: mapTools.current == 'selector'}\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"mapTools.select('selector')\">\n" +
    "                    <span class=\"fa fa-fw fa-crosshairs\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li ng-class=\"{active: mapTools.current == 'move'}\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"mapTools.select('move')\">\n" +
    "                    <span class=\"fa fa-fw fa-arrows\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li ng-class=\"{active: mapTools.current == 'move'}\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"mapTools.select('rotate')\">\n" +
    "                    <span class=\"fa fa-fw fa-repeat\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default\" ng-click=\"reset()\">\n" +
    "                    <span class=\"fa fa-fw fa-refresh\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-8\" style=\"height: 600px;\">\n" +
    "        <map></map>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-3\">\n" +
    "        <div style=\"height: 400px\">\n" +
    "            <div style=\"height: 70%\">\n" +
    "                <div class=\"list-group\" style=\"height: 100%; overflow-y: auto\">\n" +
    "                    <a href=\"#\" class=\"list-group-item\" ng-repeat=\"object in mapObjects.state\">\n" +
    "                        {{object.name}}\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("common/maps/map.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/maps/map.tpl.html",
    "<canvas id=\"map\" class=\"map\"></canvas>");
}]);

angular.module("signage/signage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("signage/signage.tpl.html",
    "<header class=\"page-row\">\n" +
    "    <nav class=\"navbar navbar-static-top navbar-mega\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"navbar-header\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Floor {{computers.buildings[0].floors[0].name}}</strong>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"navbar-header navbar-right\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Available Computers:</strong>\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    {{computers.buildings[0].available.desktops}}\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "</header>\n" +
    "\n" +
    "<div class=\"wrap page-row page-row-expanded comp-signage-body\">\n" +
    "    <canvas id=\"asset_image\" class=\"asset-image\"></canvas>\n" +
    "</div>\n" +
    "<footer class=\"page-row\">\n" +
    "    <nav class=\"navbar navbar-static-bottom navbar-mega\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"nav navbar-nav\">\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    <img src=\"ualib-computers-qr.jpg\" style=\"height: 50px;\"/>\n" +
    "\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    For computer availability in all libraries<br> visit <a href=\"#\">www.lib.ua.edu/computers</a>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"nav navbar-nav navbar-right\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Apple:</strong>\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    <span class=\"apple available\"></span> available<br> <span class=\"apple taken\"></span> taken\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"nav navbar-nav navbar-right\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Windows:</strong>\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    <span class=\"windows available\"></span> available<br> <span class=\"windows taken\"></span> taken\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "</footer>\n" +
    "");
}]);

angular.module('computersSoftware.templates', ['admin/admin.tpl.html', 'common/maps/map.tpl.html', 'signage/signage.tpl.html']);

angular.module("admin/admin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin.tpl.html",
    "<nav class=\"navbar navbar-default\">\n" +
    "    <div class=\"container\">\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.undo()\">\n" +
    "                    <span class=\"fa fa-reply\"></span> Undo\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.redo()\">\n" +
    "                    <span class=\"fa fa-share\"></span> Redo\n" +
    "                </button>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <ul class=\"nav navbar-nav\" ng-show=\"mapTools.current == 'selector'\">\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.helper('hAlignCenter')\">\n" +
    "                    <span class=\"fa fa-align-center\"></span> Horizontal Align Center\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default navbar-btn\" ng-click=\"mapTools.helper('vAlignCenter')\">\n" +
    "                    <span class=\"fa fa-align-center fa-rotate-90\"></span> Vertical Align Center\n" +
    "                </button>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "\n" +
    "\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-1\">\n" +
    "        <ul class=\"nav nav-pills nav-stacked\">\n" +
    "            <li ng-class=\"{active: mapTools.current == 'selector'}\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"mapTools.select('selector')\">\n" +
    "                    <span class=\"fa fa-fw fa-crosshairs\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li ng-class=\"{active: mapTools.current == 'move'}\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"mapTools.select('move')\">\n" +
    "                    <span class=\"fa fa-fw fa-arrows\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li ng-class=\"{active: mapTools.current == 'move'}\">\n" +
    "                <button class=\"btn btn-default\" ng-click=\"mapTools.select('rotate')\">\n" +
    "                    <span class=\"fa fa-fw fa-repeat\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <button class=\"btn btn-default\" ng-click=\"reset()\">\n" +
    "                    <span class=\"fa fa-fw fa-refresh\"></span>\n" +
    "                </button>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-8\" style=\"height: 600px;\">\n" +
    "        <map></map>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-3\">\n" +
    "        <div style=\"height: 400px\">\n" +
    "            <div style=\"height: 70%\">\n" +
    "                <div class=\"list-group\" style=\"height: 100%; overflow-y: auto\">\n" +
    "                    <a href=\"#\" class=\"list-group-item\" ng-repeat=\"object in mapObjects.state\">\n" +
    "                        {{object.name}}\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("common/maps/map.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("common/maps/map.tpl.html",
    "<canvas id=\"map\" class=\"map\"></canvas>");
}]);

angular.module("signage/signage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("signage/signage.tpl.html",
    "<header class=\"page-row\">\n" +
    "    <nav class=\"navbar navbar-static-top navbar-mega\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"navbar-header\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Floor {{computers.buildings[0].floors[0].name}}</strong>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <div class=\"navbar-header navbar-right\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Available Computers:</strong>\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    {{computers.buildings[0].available.desktops}}\n" +
    "                </p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "</header>\n" +
    "\n" +
    "<div class=\"wrap page-row page-row-expanded comp-signage-body\">\n" +
    "    <canvas id=\"asset_image\" class=\"asset-image\"></canvas>\n" +
    "</div>\n" +
    "<footer class=\"page-row\">\n" +
    "    <nav class=\"navbar navbar-static-bottom navbar-mega\">\n" +
    "        <div class=\"container-fluid\">\n" +
    "            <div class=\"nav navbar-nav\">\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    <img src=\"ualib-computers-qr.jpg\" style=\"height: 50px;\"/>\n" +
    "\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    For computer availability in all libraries<br> visit <a href=\"#\">www.lib.ua.edu/computers</a>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"nav navbar-nav navbar-right\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Apple:</strong>\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    <span class=\"apple available\"></span> available<br> <span class=\"apple taken\"></span> taken\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <div class=\"nav navbar-nav navbar-right\">\n" +
    "                <p class=\"navbar-text lead\">\n" +
    "                    <strong>Windows:</strong>\n" +
    "                </p>\n" +
    "                <p class=\"navbar-text\">\n" +
    "                    <span class=\"windows available\"></span> available<br> <span class=\"windows taken\"></span> taken\n" +
    "                </p>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "    </nav>\n" +
    "</footer>\n" +
    "");
}]);

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
                    }],
                    loadDeps: ['$ocLazyLoad', function($ocLazyLoad){
                        return $ocLazyLoad.load([
                            'monospaced.mousewheel',
                            'angular.filter'
                        ])
                    }]
                },
                templateUrl: 'admin/admin.tpl.html',
                controller: 'ComputersAdminCtrl'
            });
    }])

    .controller('ComputersAdminCtrl', ['$scope', 'Computers', '$mapObjects', function($scope, Computers, $mapObjects){
        $scope.mapdata = Computers;
        $scope.mapObjects = $mapObjects;

        $scope.$on('mapObjectsUpdated', function(){
            $scope.mapObjects.state = $mapObjects.state;
        })
    }]);
angular.module('ualib.computers.service', [
    'ualib.computers.factory'
])

    .service('Computers', ['compSoftFactory', '$timeout', '$q', '$rootScope', function(compSoftFactory, $timeout, $q, $rootScope){
        var _params = {};
        var _options = {
            noRefresh: false
        };
        var _refresh = null;
        var _cancel = false;
        var self = this;

        this.buildings = [];
        
        this.init = function(params, opt){
            var deferred = $q.defer();
            params = angular.isDefined(params) ? params : {};
            _params = params;
            opt = angular.isDefined(opt) ? opt : {};


            angular.extend(_options, opt);

            if (_refresh) {
                self.cancelRefresh();
            }
            
            getComputers().$promise.then(function(data){
                self.buildings = angular.copy(data.buildings);
                if (_options.noRefresh === false){
                    refresh();
                }
                deferred.resolve();
            });

            return deferred.promise;
        };

        this.cancelRefresh = function(){
            var _cancel = true;
        };
        
        function refresh(){
            if (!_cancel){
                _refresh = $timeout(function(){
                    getComputers().$promise.then(function(data){
                        self.buildings = angular.copy(data.buildings);
                        refresh();
                    });
                }, 8000);
            }
            else {
                $timeout.cancel(_refresh);
            }
        }
        
        function getComputers(){
            if (_params.hasOwnProperty('floor')){
                return compSoftFactory.floors().get(_params, function(data){
                    return data;
                }, function(data, status, headers, config) {
                    console.log('ERROR: Computers and Software');
                    console.log({
                        data: data,
                        status: status,
                        headers: headers,
                        config: config
                    });
                });
            }
            else {
                return compSoftFactory.buildings().get(_params, function(data){
                    return data;
                }, function(data, status, headers, config) {
                    console.log('ERROR: Computers and Software');
                    console.log({
                        data: data,
                        status: status,
                        headers: headers,
                        config: config
                    });
                });
            }
        }
        
        

    }]);
angular.module('ualib.computers.factory', [])

    .factory('compSoftFactory', ['$resource', '$http', function($resource, $http){
        var URL = 'https://wwwdev.lib.ua.edu/softwareList/api/buildings';

        function getTotalAvail(array, prop){
            prop = angular.isUndefined(prop) ? 'desktops' : prop;
            return array.filter(function(item){
                return prop === 'desktops' ? item.status === 3 : item.available === 0;
            }).length;
        }

        /**
         * @ngdoc function
         * @name databases.databasesFactory#appendTransform
         * @methodOf databases.databasesFactory
         *
         * @param {Array.<function()>} defaults Default `Array` of `$http` transform response transform functions from Angular - will always be `$http.defaults.transformResponse`
         * @param {function()} transform Transform function to extend the `$http.defaults.transformResponse` Array with.
         *
         * @description
         * <span class="label label-warning">Private</span>
         * Extend the default responseTransform array - Straight from Angular 1.2.8 API docs - https://docs.angularjs.org/api/ng/service/$http#overriding-the-default-transformations-per-request
         *
         * Doing this allows custom modifications of the JSON response from the API to be cached after the initial `$resource` call, instead of
         * performing these modifications on every `$digest()` cycle (e.g., make modifications once, instead of every time the databases list is refreshed).
         *
         * @returns {Array.<function()>} Returns the new `transformResponse` Array
         */
        function appendTransform(defaults, transform) {

            // We can't guarantee that the default transformation is an array
            defaults = angular.isArray(defaults) ? defaults : [defaults];
            //console.log(defaults.concat(transform));
            // Append the new transformation to the defaults
            return defaults.concat(transform);
        }

        function buildingsTransform(data){
            var b = angular.fromJson(data);
            var buildings = [];

            angular.forEach(b.buildings, function(building, idx){
                var desktops = 0;
                var laptops = 0;

                for (var i = 0, len = building.floors.length; i < len; i++){
                    var floor = {available: {}};

                    if (building.floors[i].hasOwnProperty('desktops')){
                        var d = getTotalAvail(building.floors[i].desktops, 'desktops');
                        floor.available.desktops = d;
                        desktops += d;
                    }

                    if (building.floors[i].hasOwnProperty('laptops')){
                        var l = getTotalAvail(building.floors[i].laptops, 'laptops');
                        floor.available.laptops = l;
                        laptops += l;
                    }

                    building.floors[i] = angular.extend({}, building.floors[i], floor);

                }

                building.available = {
                    desktops: desktops,
                    laptops: laptops
                };

                buildings.push(building);
            });

            b.buildings = buildings;
            return b;
        }

        return {
            buildings: function(){

                return $resource(URL, {}, {
                    get: {
                        method: 'GET',
                        transformResponse: appendTransform($http.defaults.transformResponse, buildingsTransform)
                    }
                });
            },
            floors: function(){
                return $resource(URL + '/:building/floors/:floor', {}, {
                    get: {
                        method: 'GET',
                        transformResponse: appendTransform($http.defaults.transformResponse, buildingsTransform)
                    }
                });
            }
        };
    }]);
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


angular.module('ualib.computers.mapObjects', [])

    .service('$mapObjects', ['$maps', '$q', '$filter', '$rootScope', function($maps, $q, $filter, $rootScope){
        var self = this;
        var undoStates = [];
        var redoStates = [];
        this.selected = [];
        this.state = [];
       

        this.selectBounds = {};

        this.init = function(objects){
            self.state = collapseObjects(objects);
        };

        this.select = function(func){
            self.state = self.state.map(function(o){
                o.selected = func(o);
                return o;
            });
            return self.getSelected();
        };

        this.getSelected = function(){
            return self.selected.length > 0 ? self.selected : self.state.filter(function(obj){
                return obj && obj.hasOwnProperty('selected') && obj.selected;
            });
        };

        this.update = function(objects){
            objects = objects ? objects : self.getSelected();
            self.state = angular.extend([], objects, self.state);
            var expanded = expandObjects(self.state);
            angular.copy(expanded, $maps.objects);
            console.log(angular.copy($maps.objects));
            $rootScope.$broadcast('mapObjectsUpdated');

        };

        this.recordState = function(objects){
            objects = objects ? objects : self.getSelected();
            undoStates.push(angular.copy(objects));
        };

        this.undo = function(){
            console.log('undo????');
            if (undoStates.length > 0){
                console.log('UNDOOOO!!!!');
                redoStates.push(self.getSelected());
                var undo = undoStates.pop();
                self.update(undo);
            }
        };

        this.redo = function(){
            if (redoState.length > 0){
                undoStates.push(angular.copy(self.state));
                angular.copy(redoStates.pop(), self.state);
            }
        };

        this.centerOfSelection = function(objects){
            objects = objects ? objects : self.getSelected();

            var maxX = getMax(objects, 'x');
            var maxY = getMax(objects, 'y');
            var minX = getMin(objects, 'x');
            var minY = getMin(objects, 'y');

            //self.selectBounds = self.boundsOfSelection(objects);

            var vcenter = ((maxX - minX)/2) + minX;
            var hcenter = ((maxY - minY)/2) + minY;
            return {
                x: vcenter,
                y: hcenter
            };
        };

        this.setSelectionBounds = function(objects){
            objects = objects ? objects : self.getSelected();

            var maxX = getMax(objects, 'x');
            var maxY = getMax(objects, 'y');
            var minX = getMin(objects, 'x');
            var minY = getMin(objects, 'y');

            self.selectBounds = {x: minX, y: minY, w: (maxX - minX + 15), h: (maxY - minY + 15)};
        };

        function getSelected(obj){
            if (angular.isObject(obj)){
                return getSelected()
            }

            return obj.filter(function(comp){
                return comp.selected;
            });
        }

        // Adopted from http://stackoverflow.com/questions/11149843/get-largest-value-in-multi-dimensional-array-javascript-or-coffeescript
        function getMax(objects, coord){
            return objects.reduce(function(max, arr) {
                return max >= parseInt(arr.coordinates[coord]) ? max : parseInt(arr.coordinates[coord]);
            }, -Infinity);
        }

        function getMin(objects, coord){
            return objects.reduce(function(min, arr) {
                return arr.coordinates[coord] < min ? arr.coordinates[coord] : min;
            }, Infinity);
        }

        function collapseObjects(objects){
            var collapsed = [];
            for (var obj in objects){
                if (objects.hasOwnProperty(obj)){
                    var newObj = objects[obj].map(function(o){
                        o.oType = obj;
                        return o;
                    });
                    collapsed = collapsed.concat(newObj);
                }
            }
            return collapsed;
        }

        function expandObjects(objects){
            var expanded = {};
            objects.map(function(obj){
                var newObj = {};
                for (var p in obj){
                    if (obj.hasOwnProperty(p) && p !== 'oType'){
                        newObj[p] = obj[p];
                    }
                }
                if (expanded.hasOwnProperty(obj.oType)){
                    expanded[obj.oType].push(newObj);
                }
                else {
                    expanded[obj.oType] = [];
                    expanded[obj.oType].push(newObj);
                }
            });
            return expanded;
        }

    }]);
angular.module('ualib.computers.mapTools', [
    'ualib.computers.mapObjects'
])
    .service('$mapTools', ['$maps', '$mapObjects', '$document', '$window', '$location', function MapTools($maps, $mapObjects, $document, $window, $location){
        var self = this;
        var offset;
        var tool;
        var canvas;
        this.canvasEventPause = false;

        this.current;
        this.prev;

        this.mapUndoStates = [];

        this.init = function(){
            var defaultTool = $location.search().tool || 'selector';
            $mapObjects.init($maps.objects);
            canvas = angular.element($maps.canvas);
            offset = getOffset($maps.canvas);
            self.select(defaultTool);
            readyCanvas();
        };

        this.destroy = function(){
            canvas.unbind();
            $document.unbind();
        };

        this.select = function(newTool){
            if (newTool !== self.current){
                self.prev = self.current;
                tool = new Tools[newTool]();
                self.current = newTool;
                $location.search('tool', self.current);
                $location.replace();
            }
        };

        this.prevTool = function(){
            if (angular.isDefined(self.prev)) self.select(self.prev);
        };

        this.helper = function(helper){
            if (angular.isObject(tool) && tool.hasOwnProperty(helper) && angular.isFunction(tool[helper])){
                tool[helper]();
            }
        };

        function readyCanvas(){
            canvas.bind('mousedown', function(ev){
                canvasEvent(ev);
                $document.bind('mousedown', toolCursor);
                $document.bind('mouseup', toolCursor);
                $document.bind('mouseup', toolChangedImage);
            });
            /*canvas.bind('mousemove', function(ev){
             ev = self.mouseLoc(ev);
             if (mouseInBounds($maps.x, $maps.y, $maps.x2, $maps.y2, ev.mx, ev.my)){
             if (!hover) hover = true;
             angular.element('body').addClass(self.current);
             canvas.bind('mousedown', canvasEvent);
             }
             else if (hover){
             hover = false;
             angular.element('body').removeClass(self.current);
             }
             });
             canvas.bind('mouseup', toolChangedImage);*/
        }

        function toolCursor(ev){
            if (ev.type == 'mousedown')
                $document.find('body').addClass(self.current);
            else if (ev.type == 'mouseup'){
                $document.find('body').removeClass(self.current);
                $document.unbind('mousedown', toolCursor);
            }
        }

        function canvasEvent(ev){
            if (!self.canvasEventPause){
                ev = self.mouseLoc(ev); //set current mouse (mx, my)
                var func = tool[ev.type];
                if (func){
                    func(ev);
                }
            }
            return ev.preventDefault() && false;
        }

        function toolChangedImage(){
            $maps.changed = true;
            canvas.unbind('mouseup', toolChangedImage);
        }

        this.mouseLoc = function(ev){
            ev.mx = ev.pageX - offset.left;
            ev.my = ev.pageY - offset.top;
            return ev;
        };

        function getBounds(x, y, w, h){
            var x1, y1, x2, y2;

            if (w < 0){
                x1 = x + w;
                x2 = x;
            }
            else {
                x1 = x;
                x2 = x + w;
            }

            if (h < 0){
                y1 = y + h;
                y2 = y;
            }
            else {
                y1 = y;
                y2 = y + h;
            }

            return {x1: x1, y1: y1, x2: x2, y2: y2};

        }

        function mouseInBounds(x1, y1, w, h, mx, my){
            var x2 = x1+w;
            var y2 = y1+h;
            //console.log(mx +' > '+ x1 +' && '+ my +' > '+ y1 +' && '+ mx +' < '+ x2 +' && '+ my +' < '+ y2);
            return (mx > x1 && my > y1 && mx < x2 && my < y2);
        }

        function inRectBounds(x1, y1, w1, h1, rx, ry, rw, rh){
            // get x2,y2 of object being checked
            var x2 = w1+x1;
            var y2 = h1+y1;
            // get bounds of select rect
            var bounds = getBounds(rx, ry, rw, rh);
            //console.log(bounds.x1 +' < '+ x1 +' && '+ bounds.y1 +' < '+ y1 +' && '+ bounds.x2 +' > '+ x2 +' && '+ bounds.y2 +' > '+ y2);
            return (bounds.x1 < x1 && bounds.y1 < y1 && bounds.x2 > x2 && bounds.y2 > y2);

        }

        function getOffset(elm){
            var rect = elm.getBoundingClientRect();
            //return {top: rect.top, left: rect.left};
            var doc = elm.ownerDocument;
            var docElem = doc.documentElement;

            return {
                top: rect.top + $window.pageYOffset - docElem.clientTop,
                left: rect.left + $window.pageXOffset - docElem.clientLeft
            };
        }

        this.map = function(val, xMin, xMax, yMin, yMax) {
            return (val - xMax) / (xMin - xMax) * (yMax - yMin) + yMin;
        };

        //Buttons - these are not selectable tools, but perform a single redefined function
        this.zoomSlider = {
            height: 0,
            pos: 0,
            elm: null,
            init: function(){
                self.zoomSlider.height = self.zoomSlider.elm.offsetHeight-2;
                self.zoomSlider.defaultPos();
            },
            defaultPos: function(){ self.zoomSlider.pos = self.map($maps.scalar, $maps.maxScale, $maps.minScale, self.zoomSlider.height, 0); }
        };

        this.zoom = function(ev, delta, deltaX, deltaY){
            // extend event variable with mouse location
            ev = self.mouseLoc(ev);
            var slideBarY;
            var dScale;
            var zoomCenter = true;

            if (!delta){
                var pos = ev.my - self.zoomSlider.height;
                dScale = self.map(pos, 0, self.zoomSlider.height, $maps.minScale, $maps.maxScale);
                delta = dScale - $maps.scalar;
            }
            else{
                delta = delta/10;
                dScale = Math.round(($maps.scalar + delta) * 1e1) / 1e1;

                zoomCenter = mouseInBounds($maps.x, $maps.y, $maps.x2, $maps.y2, ev.mx, ev.my) ? false : true;
            }

            // If mouse is not over the image, zoom from the center of the image instead of mouse location (ev.mx, ev.my)
            if (zoomCenter){
                ev.mx = ($maps.x + $maps.x2)/2;
                ev.my = ($maps.y + $maps.y2)/2;
            }
            //var clipScale = Math.min(Math.max($maps.minScale, dScale), $maps.maxScale);
            //If dScale is within scale limits
            if (!(dScale < $maps.minScale || dScale > $maps.maxScale)){

                $maps.x = ev.mx - ($maps.scalar + delta) * ((ev.mx-$maps.x) / $maps.scalar);
                $maps.y = ev.my - ($maps.scalar + delta) * ((ev.my-$maps.y) / $maps.scalar);

                $maps.scalar = dScale;
                $maps.width = $maps.image.width*$maps.scalar;
                $maps.height = $maps.image.height*$maps.scalar;

                $maps.draw();
            }
            //set slideBarY position
            slideBarY = self.map(dScale, $maps.maxScale, $maps.minScale, self.zoomSlider.height, 0);

            //zoom slider bar position - always changes, but differently depending on mousewheel or slider zoom
            self.zoomSlider.pos = Math.min(Math.max(slideBarY, 0), self.zoomSlider.height);
            return ev.preventDefault() && false;
        };

        this.undo = function(){
            $mapObjects.undo();
            $maps.draw();
        };

        this.redo = function(){
            $mapObjects.redo();
            $maps.draw();
        };


        //Tools - only one can be selected at a time
        var Tools = {
            selector: function () {
                var self = this;
                var mox = 0;
                var moy = 0;
                var ox = 0;
                var oy = 0;
                var offsets = [];
                var selected = [];
                var selectRectOffset = {};

                this.mousedown = function (ev) {
                    mox = ev.mx;
                    moy = ev.my;

                    ox = (ev.mx - $maps.x) / $maps.scalar;
                    oy = (ev.my - $maps.y) / $maps.scalar;

                    if (($maps.objects.hasOwnProperty('selectRect') && !mouseInBounds($maps.objects.selectRect.x, $maps.objects.selectRect.y, $maps.objects.selectRect.w, $maps.objects.selectRect.h, ox, oy))
                        || !$maps.objects.hasOwnProperty('selectRect')) {
                        selected = $mapObjects.select(function (obj) {
                            return mouseInBounds(obj.coordinates.x, obj.coordinates.y, 10, 10, (ev.mx - $maps.x) / $maps.scalar, (ev.my - $maps.y) / $maps.scalar);
                        });
                    }
                    else {
                        selectRectOffset = {
                            x: ev.mx - $maps.objects.selectRect.x,
                            y: ev.my - $maps.objects.selectRect.y
                        }
                    }

                    offsets = selected.map(function (obj) {
                        return {
                            x: ev.mx - obj.coordinates.x,
                            y: ev.my - obj.coordinates.y
                        }
                    });

                    $maps.draw();

                    $document.bind('mousemove', canvasEvent);
                    $document.bind('mouseup', canvasEvent);

                };

                this.mousemove = function (ev) {
                    var dx = (ev.mx - mox) / $maps.scalar;
                    var dy = (ev.my - moy) / $maps.scalar;

                    if (selected.length > 0) {
                        if ($maps.objects.hasOwnProperty('selectRect')) {
                            console.log(selectRectOffset);
                            $maps.objects.selectRect.x = mox + dx - selectRectOffset.x;
                            $maps.objects.selectRect.y = moy + dy - selectRectOffset.y;
                        }
                        selected = selected.map(function (obj, i) {
                            obj.coordinates.x = (mox + dx - offsets[i].x);
                            obj.coordinates.y = (moy + dy - offsets[i].y);
                            return obj;
                        });

                        $mapObjects.update(selected);
                    }
                    else {
                        if (!$maps.objects.hasOwnProperty('selectRect')) {

                            $maps.objects.selectRect = {
                                x: (ev.mx - $maps.x) / $maps.scalar,
                                y: (ev.my - $maps.y) / $maps.scalar,
                                w: 0,
                                h: 0
                            };
                        }
                        $maps.objects.selectRect.w = dx;
                        $maps.objects.selectRect.h = dy;

                        $mapObjects.select(function (obj) {
                            return inRectBounds(obj.coordinates.x, obj.coordinates.y, 10, 10, $maps.objects.selectRect.x, $maps.objects.selectRect.y, $maps.objects.selectRect.w, $maps.objects.selectRect.h);
                        });
                    }

                    $maps.draw();
                };

                this.mouseup = function () {
                    if ($maps.objects.hasOwnProperty('selectRect') && selected.length < 1) {
                        selected = $mapObjects.getSelected();
                        if (selected.length > 0) {
                            $mapObjects.setSelectionBounds(selected);
                            console.log($mapObjects.selectBounds);
                            angular.copy($mapObjects.selectBounds, $maps.objects.selectRect);
                        }
                        else {
                            var objects = {};
                            for (var prop in $maps.objects) {
                                if ($maps.objects.hasOwnProperty(prop) && prop !== 'selectRect') {
                                    objects[prop] = $maps.objects[prop];
                                }
                            }
                            $maps.objects = objects;
                        }
                    }

                    $mapObjects.recordState(selected);
                    $maps.draw();
                    $document.unbind('mousemove', canvasEvent);
                    $document.unbind('mouseup', canvasEvent);
                };

                /**
                 * noncanvas event sub tools for the selector tool
                 */

                this.hAlignCenter = function () {
                    var selected = $mapObjects.getSelected();
                    var center = $mapObjects.centerOfSelection(selected);

                    for (var i = 0, len = selected.length; i < len; i++) {
                        selected[i].coordinates.x = center.x;
                    }

                    $mapObjects.merge(selected);
                    $maps.draw();
                };

                this.vAlignCenter = function () {
                    var selected = $mapObjects.getSelected();
                    var center = $mapObjects.centerOfSelection(selected);

                    for (var i = 0, len = selected.length; i < len; i++) {
                        selected[i].coordinates.y = center.y;
                    }

                    $mapObjects.merge(selected);
                    $maps.draw();
                };
            },
            move: function () {
                var mox = 0;
                var moy = 0;
                var ox = 0;
                var oy = 0;

                this.mousedown = function (ev) {
                    mox = ev.mx;
                    moy = ev.my;

                    ox = ev.mx - $maps.x;
                    oy = ev.my - $maps.y;

                    $document.bind('mousemove', canvasEvent);
                    $document.bind('mouseup', canvasEvent);
                };

                this.mousemove = function (ev) {
                    var dx = ev.mx - mox;
                    var dy = ev.my - moy;

                    $maps.x = mox + dx - ox;
                    $maps.y = moy + dy - oy;

                    $maps.draw();
                };

                this.mouseup = function () {
                    $document.unbind('mousemove', canvasEvent);
                    $document.unbind('mouseup', canvasEvent);
                }
            },
            rotate: function () {
                var cX;
                var cY;
                var clickAngle;

                this.mousedown = function (ev) {
                    cX = $maps.x + ($maps.width / 2);
                    cY = $maps.y + ($maps.height / 2);
                    clickAngle = getAngle(cX, cY, ev.mx, ev.my) - $maps.angle;

                    $document.bind('mousemove', canvasEvent);
                    $document.bind('mouseup', canvasEvent);
                };

                this.mousemove = function (ev) {
                    $maps.angle = getAngle(cX, cY, ev.mx, ev.my) - clickAngle;
                    $maps.draw();
                };

                this.mouseup = function (ev) {
                    $document.unbind('mousemove', canvasEvent);
                    $document.unbind('mouseup', canvasEvent);
                };

                /**
                 * angle helper function
                 */
                function getAngle(cX, cY, mx, my) {
                    var angle = Math.atan2(my - cY, mx - cX);
                    return angle;
                }
            }
        };

    }]);
angular.module('ualib.computers.maps', [])

    .factory('loadMap', ['$q', function($q){
        return function(src){
            var deferred = $q.defer();
            var map = new Image();

            map.onload = function(){
                deferred.resolve(map);
            };
            map.src = src;

            return deferred.promise;
        };
    }])

    .service('$maps', ['$q', 'mapStyles', function($q, styles){
        var self = this;
        this.canvas = null;
        this.ctx = null;
        this.image = null;
        this.changed = false;
        this.prev = {};
        this.objects = {};

        this.margin = {
            width: 0,
            height: 0
        };
        this.offset = {
            width: 0,
            height: 0
        };

        this.x = 0;
        this.y = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.width = 0;
        this.height = 0;
        this.scalar = 0.4;
        this.minScale = 0.2;
        this.maxScale = 1.4;
        this.angle = 0;

        this.setDefaults = function(){
            self.resizeCanvas();
            self.changed = false;
            self.x = 0;
            self.y = 0;
            self.angle = 0;
            self.setScale();
            self.resizeImage();
            self.center();
            //console.log({changed: self.changed});
        };

        this.refactor = function(offset){
            if (offset.width !== self.width){
                self.setOffset(offset);
                if (!self.changed){
                    self.setDefaults();
                }
                else{
                    var x = self.x + (self.prev.canvas_width - self.canvas.width)/2;
                    var y = self.y + (self.prev.canvas_height - self.canvas.height)/2;
                    if (x > 0 && (self.x+self.width) < (self.canvas.width - self.margin.width - self.offset.width)) {
                        self.x = x;
                    }
                    if (y > 0 && (self.y+self.height) < (self.canvas.height - self.margin.height - self.offset.height)) {
                        self.y = y;
                    }
                    //if ((self.x - dx) > 0 && dx < (self.x+self.width)) self.x -= dx;
                    //if ((self.y - dy) > 0 && dy < (self.y+self.height)) self.y -= dy;

                }
                self.draw();
            }
        };

        this.init = function(params){
            var deferred = $q.defer();
            if (params.src){
                if (params.offset) {
                    self.setOffset(params.offset);
                }
                if (params.objects){
                    self.objects = angular.copy(params.objects);
                }
                self.canvas = params.canvas;
                self.ctx = self.canvas.getContext('2d');
                self.loadImage(params.src).then(function(){
                    self.setDefaults();
                    self.draw();
                    deferred.resolve();
                });
            }
            else{
                deferred.reject('No image src given.');
            }
            return deferred.promise;
        };

        this.setOffset = function(offset){
            if (self.offset.width !== offset.width) {
                self.offset.width = offset.width;
            }
        };

        this.loadImage = function(src){
            var deferred = $q.defer();
            self.image = new Image();

            self.image.onload = function(){
                deferred.resolve();
            };
            self.image.src = src;
            return deferred.promise;
        };

        this.draw = function(){
            //console.log(self.scalar);
            // Clear the canvas
            self.clear();
            // Save matrix state
            self.ctx.save();

            // Translate matrix to (x, y) then scale matrix
            self.ctx.translate(self.x, self.y);
            self.ctx.scale(self.scalar, self.scalar);

            // Translate matrix to (x, y) values representing the distance to the image's center
            self.ctx.translate(self.image.width/2, self.image.height/2);
            // Rotate matrix
            self.ctx.rotate(self.angle);
            // Translate matrix back to state before it was translated to the (x, y) matching the image's center
            self.ctx.translate(-self.image.width/2, -self.image.height/2);

            // Draw image to canvas
            self.ctx.drawImage(self.image, 0, 0);
            self.drawObjects();

            // Restore matrix to it's saved state.
            // If the matrix was not saved, then altered, then restored
            // 	for every draw, then the transforms would stack (i.e., without save/restore
            //	and image at scale 1, scaled to 1.2, then scale to 1 would result in a final scale
            // 	of 1.2 - because (1 * 1.2) * 1 = 1.2
            self.ctx.restore();

            self.x2 = self.x + self.width;
            self.y2 = self.y + self.height;
        };

        this.drawObjects = function(){

            if (self.objects.hasOwnProperty('desktops')){
                self.ctx.fillStyle = styles.desktops.available.color;

                for (var i = 0, len = self.objects.desktops.length; i < len; i++){
                    var comp = self.objects.desktops[i];
                    var x = comp.coordinates.x;
                    var y = comp.coordinates.y;

                    self.ctx.save();
                    self.ctx.translate(x, y);
                    if (comp.status !== 3){
                        self.ctx.fillStyle = styles.desktops.taken.color;
                    }

                    if (comp.os === 1){
                        self.ctx.fillRect(2, 2, 13, 13);
                        /*if (parseInt(comp.monitors) > 1){
                            self.ctx.fillRect(x+5, y-5, 15, 15);
                            self.ctx.clearRect(x+5, y, 10, 10);
                        }*/
                        if (comp.selected){
                            self.ctx.lineWidth = 5;
                            self.ctx.strokeStyle = '#00ff00';
                            self.ctx.strokeRect(0, 0, 13, 13);
                        };
                    }
                    else if (comp.os === 2){

                        self.ctx.beginPath();
                        self.ctx.arc(7, 7, 7, 0, 2*Math.PI);
                        self.ctx.fill();
                        if (comp.selected){
                            self.ctx.lineWidth = 5;
                            self.ctx.strokeStyle = '#00ff00';
                            self.ctx.stroke();
                        }
                    }
                    self.ctx.restore();

                }
            }
            if (self.objects.hasOwnProperty('selectRect')){
                var rect = angular.copy(self.objects.selectRect);
                self.ctx.save();
                self.ctx.setLineDash([6, 4]);
                self.ctx.strokeStyle = '#333';
                self.ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
                self.ctx.restore();

            }
        };

        this.setScale = function(){
            var width_ratio = (self.canvas.width - self.margin.width - self.offset.width) / self.image.width;
            var height_ratio = (self.canvas.height - self.margin.height - self.offset.height) / self.image.height;
            self.scalar = Math.min(width_ratio, height_ratio);
            /*console.log({w_ratio: width_ratio, h_ratio: height_ratio});
             console.log('width_ratio = ('+self.canvas.width+' - ('+self.margin.width+' + '+self.offset.width+')) / '+self.image.width);
             console.log('height_ratio = ('+self.canvas.height+' - ('+self.margin.height+' + '+self.offset.height+')) / '+self.image.height);*/
        };

        this.clear = function(){
            self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
        };

        this.resizeCanvas = function(){
            self.prev.canvas_width = self.canvas.width;
            self.prev.canvas_height = self.canvas.height;

            self.canvas.style.width = '100%';
            self.canvas.style.height = '100%';

            self.canvas.width = self.canvas.offsetWidth;
            self.canvas.height = self.canvas.offsetHeight;

        };

        this.resizeImage = function(){
            self.width = self.image.width*self.scalar;
            self.height = self.image.height*self.scalar;
        };

        this.center = function(){
            self.x = ((self.canvas.width - self.offset.width) - self.width)/2;
            self.y = ((self.canvas.height) - self.height)/2;
        };

        this.scaleXY = function(newWidth, newHeight){
            self.x = newWidth/self.canvas.width;
            self.y = newHeight/self.canvas.height;
        };

        this.posImage = function(){
            if (!self.changed){
                self.center();
            }
            else{
                self.x *= self.canvas.width/self.prev.canvas_width;
                self.y *= self.canvas.height/self.prev.canvas_height;
            }
        };

        this.getSelectedObjects = function(){
            self.objects.filter(function(comp){
                return comp.selected;
            });
        };
    }]);

angular.module('ualib.computers', [
    'ngRoute',
    'ngResource',
    'computersSoftware.templates',
    'ualib.computers.admin',
    'ualib.computers.signage'
])

    .value('mapStyles', {
        desktops: {
            available: {
                shape: 'fillRect',
                color: '#61a661'
            },
            taken: {
                shape: 'strokeRect',
                color: '#eee'
            }
        }
    });
angular.module('ualib.computers.signage', [
    'ualib.computers.service',
    'ualib.computers.maps'
])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/computers/signage/:building/:floor', {
                reloadOnSearch: false,
                resolve: {
                    floors: ['Computers', '$route', function(Computers, $route){

                        return Computers.init($route.current.params).then(function(){
                            return true;
                        });
                        /*console.log($route);
                        return CFF.floors().get($route.current.params, function(data){
                            return data;
                        }, function(data, status, headers, config) {
                            console.log('ERROR: Computers and Software');
                            console.log({
                                data: data,
                                status: status,
                                headers: headers,
                                config: config
                            });
                        });*/
                    }]
                },
                templateUrl: 'signage/signage.tpl.html',
                controller: 'SignageCtrl'
            });
    }])

    .controller('SignageCtrl', ['$scope', 'Computers', function($scope, Computers){
        $scope.computers = Computers;

    }])

    .directive('assetImage', ['$maps', '$timeout', '$window',  function($maps, $timeout, $window){
        return{
            restrict: 'AC',
            link: function(scope, elm){


                var scalar = 0.27;
                var yOffset = 60;
                var floor = parseInt(scope.computers.buildings[0].floors[0].name);

                if (floor === 3){
                    scalar = 0.14;
                    yOffset = 85;
                }
                else if(floor === 2){
                    scalar = 0.14;
                    yOffset = 85;
                }

                $maps.init({
                 src: 'http://wwwdev.lib.ua.edu/' + scope.computers.buildings[0].floors[0].image.url,
                 canvas: elm[0], objects: {desktops: scope.computers.buildings[0].floors[0].desktops},
                 width: scope.computers.buildings[0].floors[0].image.width,
                 height: scope.computers.buildings[0].floors[0].image.height,
                 scalar: scalar,
                 yOffset: yOffset
                 });

                angular.element($window).bind('resize', function(){
                    $maps.resizeCanvas();
                    $maps.setScale();
                    $maps.resizeImage();
                    $maps.posImage();
                    $maps.draw();
                });

                scope.$on('$destroy', function(){
                    angular.element($window).unbind('resize');
                });

            }
        };
    }]);
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
                        'vendor/hamsterjs/hamster.js',
                        'vendor/angular-mousewheel/mousewheel.js'
                    ]
                }
            ]
        });

    }]);
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