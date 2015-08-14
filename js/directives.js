angular.module('SampleDirectives', [])
    .directive('completeColor', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                scope.$watch(attrs.completeColor, function(value) {
                    element.css('background-color', (value ? '#F5F5F5' : '#FFF')); 
                });
            }
        }
    });