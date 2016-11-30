'use strict';

angular
  .module('auction', [
    'ngRoute'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    var title = function(page) {
        return page + ' | Auction';
    };

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'ctrl',
        title: title('Home')
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'ctrl',
        title: title('Search')
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(event, currentRoute) {
        $rootScope.pageTitle = currentRoute.title;
    });
  }]);
