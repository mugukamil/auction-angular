'use strict';

var priceRangeDirectiveFactory = function() {
  return {
    scope: {
      minPrice: '@',
      maxPrice: '@',
      lowPrice: '=',
      highPrice: '='
    },
    restrict: 'E',
    templateUrl: 'views/partial/pricerange-directive.html',
    link: function(scope, el) {
      var slider = angular.element(el).find('input[type=text]'),
          min = scope.minPrice || 0,
          max = scope.maxPrice || 500;

      scope.lowPrice = scope.lowPrice || min;
      scope.maxPrice = scope.maxPrice || max;

      slider.slider({
        min: min,
        max: max,
        value: [
          scope.lowPrice,
          scope.highPrice
        ]
      });

      slider.on('slideStop', function(e) {
        scope.$apply(function() {
          if (scope.lowPrice !== e.value[0]) { scope.lowPrice = e.value[0]; }
          if (scope.highPrice !== e.value[1]) { scope.highPrice = e.value[1]; }
        });
      });

      var currentVal = function() { return slider.slider('getValue'); };
      var setSlider = function(low, high) { slider.slider('setValue', [low, high]); };

      scope.$watch('lowPrice', function(newVal) { setSlider(newVal || min, currentVal()[1]); });
      scope.$watch('highPrice', function(newVal) { setSlider(currentVal()[0], newVal || max); });
    }
  };
};

angular.module('auction').directive('auctionPriceRange', priceRangeDirectiveFactory);
