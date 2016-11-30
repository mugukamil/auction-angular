'use strict';

var footerDirectiveFactory = function() {
  return {
    restrict: 'E',
    templateUrl: 'views/partial/footer-directive.html'
  };
};

angular.module('auction').directive('auctionFooter', footerDirectiveFactory);
