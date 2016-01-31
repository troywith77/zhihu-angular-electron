var menuBar = angular.module('menuBar', []);

menuBar.directive('menuBar', ['menuBarHttpRequest', function(menuBarHttpRequest) {
	return {
		restrict: 'EA',
		templateUrl: 'components/menuBar/menuBar.html',
		scope: {},
		replace: true,
		link: function(scope) {
			menuBarHttpRequest.getThemes().then(function(data) {
				scope.themes = data.others;
			})
		}
	}
}]);