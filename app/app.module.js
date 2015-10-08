angular
    .module('public', [
        'ionic',
        'ui.router',
        'ui.router.state',
        'ui.bootstrap',
        'ngAnimate',
        'ng-showdown',
        'akoenig.deckgrid',
        'public.home',
        'public.posts',
        'public.portfolio',
        'public.about',
        'public.contact'
    ])

    .config(function($stateProvider, $urlRouterProvider) {

        //$authProvider.configure({
        //    apiUrl: 'http://localhost:3000/api/v1'
        //});
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'app/shared/app.html'
            })

            .state('web', {
                url: '/web',
                abstract: true,
                templateUrl: 'app/shared/web.html'
            });

        //var detectMob = function(){
        //    if (ionic.Platform.isWebView() || ionic.Platform.isIPad() || ionic.Platform.isIOS() || ionic.Platform.isAndroid() || ionic.Platform.isWindowsPhone()){
        //        $urlRouterProvider.otherwise("/app/home");
        //    }else{
        //        $urlRouterProvider.otherwise("/web/home");
        //    }
        //};
        //detectMob();

        $urlRouterProvider.otherwise("/web/home");
    })

    .controller('MainCtrl', function ($scope, $location) {


    })

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });
