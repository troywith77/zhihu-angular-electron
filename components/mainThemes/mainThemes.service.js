angular.module('mainThemes')
	.service('getThemesList', ['$http', '$q', function($http, $q) {
		return {
			getThemes: function(id) {
				return $http.get('http://news-at.zhihu.com/api/4/theme/' + id)
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
		}
	}])
