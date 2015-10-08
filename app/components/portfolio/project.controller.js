function ProjectCtrl($scope, $stateParams, PortfolioService){

    var projectId = $stateParams.id;

    $scope.project = PortfolioService.show(projectId);

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.slides = $scope.project.carousel;

}
angular
    .module('public.portfolio')
    .controller('ProjectCtrl', ProjectCtrl);