/*global $*/
'use strict';

angular.module('myApp.rebox.rebox-directive', [])

.directive('rebox', function() {
  return {
		restrict: 'A',
		scope: {
			selector: '@reboxSelector'
		},
		link: function(scope, element, attr) {
			$(element).rebox({ selector: scope.selector });
		}
	};
});

angular.module('myApp.rebox', [
  'myApp.rebox.rebox-directive'
]);

