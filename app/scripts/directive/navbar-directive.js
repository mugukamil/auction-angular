'use strict';

var navbarDirectiveFactory = function() {
  return {
    restrict: 'E',
    templateUrl: 'views/partial/navbar-directive.html'
  };
};

angular.module('auction').directive('auctionNavbar', navbarDirectiveFactory);
