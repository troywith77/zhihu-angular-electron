var app = angular.module('zhihu', ['ui.router', 'menuBar', 'mainList', 'detail', 'header', 'ngSanitize', 'mainThemes'])
	.controller('mainCtrl', ['$scope', function($scope) {
		$scope.name = '知乎日报';
	}])
	.config(function($stateProvider, $urlRouterProvider) {
		var currentDate = moment().subtract(-1, 'days').format('YYYYMMDD');
		$urlRouterProvider.otherwise('/list/' + currentDate);
		$stateProvider
			.state('list', {
				url: '/list/:date',
				template: '<div main-list />',
			})
			.state('themes', {
				url: '/theme/:theme',
				template: '<div main-themes />',
			})
			.state('detail', {
				url: '/detail/:id',
				template: '<div detail />',
			})
	})