/**
 * Created by hamidbehnam on 3/3/16.
 */

angular.module("app.services")
    .factory("randomService", randomService);

function randomService() {
    return {
        generateRandomNumber: function () {
            return Math.floor(Math.random() * 181);
        }
    };
}
