'use strict';

var searchFormDirective = function() {
    return {
        restrict: 'E',
        templateUrl: 'views/partial/SearchFormDirective.html'
    };
};

angular.module('auction').directive('auctionSearchForm', searchFormDirective);
