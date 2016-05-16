'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('header',function(){
		return {
        templateUrl:'/public/app/scripts/directives/header/header.php',
        restrict: 'E',
        replace: true,
    	}
	});


