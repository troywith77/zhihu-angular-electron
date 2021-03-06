angular.module('detail')
	.service('getDetail', ['$http', '$q', function($http, $q) {
		return {
			getdetail: function(id) {
				return $http.get('http://news-at.zhihu.com/api/4/news/' + id)
					.then(function(response) {
						if (typeof response.data === 'object') {
							return response.data;
						} else {
							// invalid response
							return $q.reject(response.data);
						}

					}, function(response) {
						// something went wrong
						return $q.reject(response.data);
					});
			}
		};
	}])
