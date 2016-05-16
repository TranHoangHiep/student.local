'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: '/public/app/views/dashboard/main.php',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    '/public/app/scripts/directives/header/header.js',
                    '/public/app/scripts/directives/header/header-notification/header-notification.js',
                    '/public/app/scripts/directives/sidebar/sidebar.js',
                    '/public/app/scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["/public/app/bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "/public/app/bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['/public/app/bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['/public/app/bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['/public/app/bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['/public/app/bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['/public/app/bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'/public/app/views/dashboard/home.php',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              '/public/app/scripts/controllers/main.js',
              '/public/app/scripts/directives/timeline/timeline.js',
              '/public/app/scripts/directives/notifications/notifications.js',
              '/public/app/scripts/directives/chat/chat.js',
              '/public/app/scripts/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })
      .state('dashboard.form',{
        templateUrl:'/public/app/views/form.php',
        url:'/form'
    })
      .state('dashboard.blank',{
        templateUrl:'/public/app/views/pages/blank.php',
        url:'/blank'
    })
      .state('login',{
        templateUrl:'/public/app/views/pages/login.php',
        url:'/login'
    })
      .state('dashboard.chart',{
        templateUrl:'/public/app/views/chart.php',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                '/public/app/bower_components/angular-chart.js/dist/angular-chart.min.js',
                '/public/app/bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['/public/app/scripts/controllers/chartContoller.js']
            })
          }
        }
    })
      .state('dashboard.table',{
        templateUrl:'/public/app/views/table.php',
        url:'/table'
    })
      .state('dashboard.panels-wells',{
          templateUrl:'/public/app/views/ui-elements/panels-wells.php',
          url:'/panels-wells'
      })
      .state('dashboard.buttons',{
        templateUrl:'/public/app/views/ui-elements/buttons.php',
        url:'/buttons'
    })
      .state('dashboard.notifications',{
        templateUrl:'/public/app/views/ui-elements/notifications.php',
        url:'/notifications'
    })
      .state('dashboard.typography',{
       templateUrl:'/public/app/views/ui-elements/typography.php',
       url:'/typography'
   })
      .state('dashboard.icons',{
       templateUrl:'/public/app/views/ui-elements/icons.php',
       url:'/icons'
   })
      .state('dashboard.grid',{
       templateUrl:'/public/app/views/ui-elements/grid.php',
       url:'/grid'
   })
  }]);

    
