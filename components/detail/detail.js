angular.module('detail', [])
	.directive('detail', ['getDetail', '$sce', function(getDetail, $sce) {
		return {
			restrict: 'AE',
			scope: {},
			templateUrl: 'components/detail/detail.html',
			link: function(scope) {
				getDetail.getdetail().then(function(data) {
					scope.content = data.body;
				})
			}
		}
	}])