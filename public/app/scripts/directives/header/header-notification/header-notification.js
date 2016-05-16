'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('headerNotification',function(){
		return {
        templateUrl:'/public/app/scripts/directives/header/header-notification/header-notification.php',
        restrict: 'E',
        replace: true,
    	}
	});


