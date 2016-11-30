'use strict';

var HomeCtrl = function(productService) {
    var _this = this;

    _this.products = [];

    productService.getProducts()
        .then(function(data) { _this.products = data; });
};

HomeCtrl.$inject = ['ProductService'];

angular.module('auction').controller('HomeCtrl', HomeCtrl);
