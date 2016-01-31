var mainList = angular.module('mainList', []);

mainList.directive('mainList', ['$state', '$stateParams', 'getListContentService', 'getDetail', 'getHistoryContentService', function($state,$stateParams,getListContentService,getDetail,getHistoryContentService) {
	return {
		restrice: 'AE',
		scope: {},
		templateUrl: 'components/mainList/mainList.html',
		replace: true,
		link: function(scope) {
			var currentDay = $stateParams.date;
			var realToday = moment().subtract(-1, 'days').format('YYYYMMDD');

			getHistoryContentService.getHistoryNews(currentDay).then(function(data) {
				scope.lists = data.stories;
				scope.newsDate = data.date;
			})

			scope.goToDetail = function(id) {
				$state.go('detail', {id: id});
			}

			scope.goPrev = function() {
				var prevDay = moment(currentDay).subtract(1, 'days').format('YYYYMMDD');
				$state.go('list', {date: prevDay});
			}

			scope.goNext = function() {
				if(currentDay === realToday) return ;
				var nextDay = moment(currentDay).subtract(-1, 'days').format('YYYYMMDD');
				$state.go('list', {date: nextDay});
			}

		}
	}
}])