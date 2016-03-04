/**
 * Created by hamidbehnam on 3/3/16.
 */

angular.module("app.controllers")
    .controller("MainController", ["$scope", MainController]);

function MainController($scope) {
    $scope.mainModel = {
        dialImg: "img/dial.png",
        meterImg: "img/meter.png"
    };
}
