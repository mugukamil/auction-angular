'use strict';

angular
  .module('auction', [
    'ngRoute',
    'restangular'
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
      .when('/product/:productId', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'ctrl',
        title: title('Product Details'),
        resolve: {
          product: ['$route', 'ProductService', function($route, productService) {
            var productId = parseInt($route.current.params.productId);
            return productService.getProductById(productId);
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .config(['RestangularProvider', function(RestangularProvider) {
    RestangularProvider.setBaseUrl('https://private-5c1fc8-romanivanov1.apiary-mock.com');
    // RestangularProvider.setRequestSuffix('');
  }])
  .run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function(event, currentRoute) {
        $rootScope.pageTitle = currentRoute.title;
    });
  }]);
