angular.module('detail')
	.service('getDetail', ['$http', '$q', function($http, $q) {
		var detailId;
		return {
			getdetail: function() {
				// the $http API is based on the deferred/promise APIs exposed by the $q service
				// so it returns a promise for us by default
				return $http.get('http://news-at.zhihu.com/api/4/news/' + detailId)
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
			},
			setDetailId: function(id) {
				detailId = id;
			}
		};
	}])
