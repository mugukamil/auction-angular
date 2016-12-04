'use strict';

var datepickerDirectiveFactory = function() {
    return {
        restrict: 'A',
        link: function(scope, el) {
            el.datepicker();
        }
    };
};

angular.module('auction').directive('auctionDatepicker', datepickerDirectiveFactory);
