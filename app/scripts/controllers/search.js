'use strict';

var SearchCtrl = function(productService) {
    var _this = this;

    _this.products = [];

    productService.find()
        .then(function(data) { _this.products = data; });
};

SearchCtrl.$inject = ['ProductService'];

angular.module('auction').controller('SearchCtrl', SearchCtrl);
