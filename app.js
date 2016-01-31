var app = angular.module('zhihu', ['ui.router', 'menuBar', 'mainList', 'detail', 'header', 'ngSanitize'])
	.controller('mainCtrl', ['$scope', function($scope) {
		$scope.name = '知乎日报';
	}])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/list');
		$stateProvider
			.state('list', {
				url: '/list',
				template: '<div main-list />'
			})
			.state('detail', {
				url: '/detail',
				template: '<div detail />',
			})
	})