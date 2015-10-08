function PostsCtrl($scope, $http, PostsService){

    //var getPosts = function() {
    //    PostsService.index().then(function(resp){
    //        $scope.posts = resp
    //    })
    //};
    //getPosts();

    $scope.posts = PostsService.index();

    //var converter = new showdown.Converter();
    //var pad = document.getElementById('pad');
    //var markdownArea = document.getElementById('markdown');
    //
    //var convertTextAreaToMarkdown = function(){
    //    var markdownText = pad.value;
    //    html = converter.makeHtml(markdownText);
    //    markdownArea.innerHTML = html;
    //};
    //
    //pad.addEventListener('input', convertTextAreaToMarkdown);
    //
    //convertTextAreaToMarkdown();
}
angular
    .module('public.posts')
    .controller('PostsCtrl', PostsCtrl);