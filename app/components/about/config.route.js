function config($stateProvider) {

    $stateProvider
        .state('web.about', {
            url: '/about',
            templateUrl: 'app/components/about/web.about.html',
            controller: 'AboutCtrl'
        })

}
angular
    .module('public.about')
    .config(config);