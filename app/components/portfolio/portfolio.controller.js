function PortfolioCtrl($scope, PortfolioService, $modal, $filter){

    $scope.title = 'PORTFOLIO';

    $scope.projects = $filter('orderBy')(PortfolioService.index(), 'date', true);

    $scope.imageModal = function(img) {
        $modal.open({
            templateUrl: 'app/shared/image-modal.html',
            controller: 'ModalCtrl',
            windowClass: 'image-modal',
            resolve: {
                img: function() {
                    return img
                }
            }
        });
    };
}
angular
    .module('public.portfolio')
    .controller('PortfolioCtrl', PortfolioCtrl);