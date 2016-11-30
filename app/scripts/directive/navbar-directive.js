'use strict';

var navbarDirectiveFactory = function() {
  return {
    scope: false,
    restrict: 'E',
    templateUrl: 'views/partial/navbar-directive.html'
  };
};

angular.module('auction').directive('auctionNavbar', navbarDirectiveFactory);
