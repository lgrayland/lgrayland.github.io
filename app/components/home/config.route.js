function config($stateProvider) {

    $stateProvider
        .state('app.home', {
            url: '/home',
            views: {
                'appContent' :{
                    templateUrl: 'app/components/home/app.home.html',
                    controller: 'HomeCtrl'
                }
            }
        })
        .state('web.home', {
            url: '/home',
            templateUrl: 'app/components/home/web.home.html',
            controller: 'HomeCtrl'
        })
}
angular
    .module('public.home')
    .config(config);