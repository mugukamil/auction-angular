'use strict';

var ProductService = function(Restangular) {
    this.Restangular = Restangular;
};

ProductService.prototype = {
    getProducts: function() {
      return this.Restangular.all('products').getList();
    },
    find: function(params) {
      return this.Restangular.all('products').getList(params);
    },
    getProductById: function(productId) {
      return this.Restangular.one('products', productId).get();
    }
};

ProductService.$inject = ['Restangular'];

angular.module('auction').service('ProductService', ProductService);
