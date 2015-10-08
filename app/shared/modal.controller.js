function ModalCtrl($scope, $modalInstance, img){

    $scope.img = img;

    $scope.ok = function () {
        $modalInstance.close();
    };
}
angular
    .module('public')
    .controller('ModalCtrl', ModalCtrl);