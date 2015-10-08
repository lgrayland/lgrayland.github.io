function config($stateProvider) {

    $stateProvider
        .state('web.contact', {
            url: '/contact',
            templateUrl: 'app/components/contact/web.contact.html',
            controller: 'ContactCtrl'
        })

}
angular
    .module('public.contact')
    .config(config);