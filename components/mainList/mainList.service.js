angular.module('mainList')
	.service('getListContentService', ['$http', '$q', function($http, $q) {
		return {
			getLatestNews: function() {
				return $http.get('http://news-at.zhihu.com/api/4/news/latest')
					.then(function(response) {
						if (typeof response.data === 'object') {
							return response.data;
						} else {
							return $q.reject(response.data);
						}

					}, function(response) {
						return $q.reject(response.data);
					});
			}
		};
	}])
	.service('getHistoryContentService', ['$http', '$q', function($http, $q) {
		return {
			getHistoryNews: function(date) {
				return $http.get('http://news.at.zhihu.com/api/4/news/before/' + date)
					.then(function(response) {
						if (typeof response.data === 'object') {
							return response.data;
						} else {
							return $q.reject(response.data);
						}

					}, function(response) {
						return $q.reject(response.data);
					});
			}
		};
	}])
