'use strict';

var ProductCtrl = function(product) {
  this.product = product;
};

ProductCtrl.$inject = ['product'];

angular.module('auction').controller('ProductCtrl', ProductCtrl);
