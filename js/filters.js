angular.module('SampleFilters', []).filter('altCaps', function() {
        return function(input) {
            var charArray = input.split('');
            charArray = charArray.map(function(el, idx) {
                return idx % 2 === 0 ? el.toLowerCase(el) : el.toUpperCase(el);
            });
            return charArray.join('');
        } 
    });