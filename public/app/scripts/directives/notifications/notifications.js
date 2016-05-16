'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('notifications',function(){
		return {
        templateUrl:'/public/app/scripts/directives/notifications/notifications.php',
        restrict: 'E',
        replace: true,
    	}
	});


