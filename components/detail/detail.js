angular.module('detail', [])
	.directive('detail', ['getDetail', '$sce', '$stateParams', function(getDetail, $sce, $stateParams) {
		return {
			restrict: 'AE',
			scope: {},
			templateUrl: 'components/detail/detail.html',
			link: function(scope) {
				var id = $stateParams.id;
				getDetail.getdetail(id).then(function(data) {
					scope.content = data.body;
				})


			}
		}
	}])