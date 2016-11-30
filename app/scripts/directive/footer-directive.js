'use strict';

var footerDirectiveFactory = function() {
  return {
    scope: false,
    restrict: 'E',
    templateUrl: 'views/partial/footer-directive.html'
  };
};

angular.module('auction').directive('auctionFooter', footerDirectiveFactory);
