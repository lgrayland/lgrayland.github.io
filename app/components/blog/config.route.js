function config($stateProvider) {

    $stateProvider
        .state('web.posts', {
            url: '/posts',
            templateUrl: 'app/components/blog/web.index.html',
            controller: 'PostsCtrl'
        })
        .state('web.post', {
            url: '/post/:id',
            templateUrl: 'app/components/blog/web.view.html',
            controller: 'PostCtrl'
        })
        //.state('dashboard.createPost', {
        //    url:'/create-post',
        //    templateUrl: 'app/components/blog/web.create.html',
        //    controller: 'PostsCtrl'
        //});
}
angular
    .module('public.posts')
    .config(config);