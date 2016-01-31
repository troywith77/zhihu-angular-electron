var header = angular.module('header', []);

header.directive('mainHeader', [function() {
	return {
		restrict: 'AE',
		scope: {},
		replace: true,
		templateUrl: 'components/header/header.html',
		link: function(scope) {
			scope.goBack = function() {
				history.go(-1)
			}
		}
	}
}])
