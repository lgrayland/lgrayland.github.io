function SidebarCtrl($scope, $http, PostsService){

    $scope.posts = PostsService.index();

    function getTags(){
        var tags = [];
        for (var i = 0; i < $scope.posts.length; i++) {
            var post = $scope.posts[i];
            for (var t = 0; t < post.tags.length; t++) {
                tags.push(post.tags[t]);
            }
        }
        return tags
    }
    $scope.tags = getTags();
}
angular
    .module('public')
    .controller('SidebarCtrl', SidebarCtrl);