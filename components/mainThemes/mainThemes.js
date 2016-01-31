var mainThemes = angular.module('mainThemes', []);

mainThemes.directive('mainThemes', ['$state', '$stateParams', 'getThemesList', function($state, $stateParams, getThemesList) {
	return {
		restrict: 'AE',
		scope: {},
		replace: true,
		templateUrl: 'components/mainThemes/mainThemes.html',
		link: function(scope) {
			var themeId = $stateParams.theme;
			getThemesList.getThemes(themeId).then(function(data) {
				scope.themes = data.stories;
			})

			scope.goToDetail = function(id) {
				$state.go('detail', {id: id});
			}
		}
	}
}])