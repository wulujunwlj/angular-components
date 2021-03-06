/**
 * 组件配置文件
 */
(function(angular) {
	'use strict';

	angular
		.module('components')
		.constant('componentsConfig', {
			moduleName: 'components',
			version: '0.0.1',
			author: 'ksh',
			keyWords: [
				'angular',
				'plugins',
				'front-end'
			],
			isDebug: false,
			isLoadModulesEvents: false,
		});
})(angular);