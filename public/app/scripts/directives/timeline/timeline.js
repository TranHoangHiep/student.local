'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('timeline',function() {
    return {
        templateUrl:'/public/app/scripts/directives/timeline/timeline.php',
        restrict: 'E',
        replace: true,
    }
  });
