function config($stateProvider) {

    $stateProvider
        .state('web.portfolio', {
            url: '/portfolio',
            templateUrl: 'app/components/portfolio/web.index.html',
            controller: 'PortfolioCtrl'
        })
        .state('web.project', {
            url: '/project/:id',
            templateUrl: 'app/components/portfolio/web.show.html',
            controller: 'ProjectCtrl'
        });
}
angular
    .module('public.portfolio')
    .config(config);