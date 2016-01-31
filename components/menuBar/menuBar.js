var menuBar = angular.module('menuBar', []);

menuBar.directive('menuBar', ['menuBarHttpRequest', '$state', function(menuBarHttpRequest, $state) {
	return {
		restrict: 'EA',
		templateUrl: 'components/menuBar/menuBar.html',
		scope: {},
		replace: true,
		link: function(scope) {
			menuBarHttpRequest.getThemes().then(function(data) {
				scope.themes = data.others;
			})

			var realToday = moment().subtract(-1, 'days').format('YYYYMMDD');
			scope.goHome = function() {
				$state.go('list', {date: realToday})
			}

			scope.goTheme = function(id) {
				$state.go('themes', {theme: id})
			}
		}
	}
}]);