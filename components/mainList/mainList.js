var mainList = angular.module('mainList', []);

mainList.directive('mainList', ['getListContentService', 'getDetail', 'getHistoryContentService', function(getListContentService,getDetail,getHistoryContentService) {
	return {
		restrice: 'AE',
		scope: {},
		templateUrl: 'components/mainList/mainList.html',
		replace: true,
		link: function(scope) {
			getListContentService.getLatestNews().then(function(data) {
				scope.lists = data.stories;
			})
			scope.goToDetail = function(id) {
				getDetail.setDetailId(id)
			}

			var days = -1;
			var currentDay = moment().format('YYYYMMDD');


			scope.goPrev = function() {
				days += 1;
				var choseDate = moment().subtract(days, 'days').format('YYYYMMDD');
				getHistoryContentService.getHistoryNews(choseDate).then(function(data) {
					scope.lists = data.stories
				})
			}

			scope.goNext = function() {
				if(days === -1) return ;
				days -= 1;
				var choseDate = moment().subtract(days, 'days').format('YYYYMMDD');
				getHistoryContentService.getHistoryNews(choseDate).then(function(data) {
					scope.lists = data.stories
				})
			}
		}
	}
}])