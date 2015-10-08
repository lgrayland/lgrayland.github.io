function PostCtrl($scope, $http, $stateParams, PostsService){

    var jobId = $stateParams.id;

    $scope.post = PostsService.show(jobId);

}
angular
    .module('public.posts')
    .controller('PostCtrl', PostCtrl);