/**
 * Created by hamidbehnam on 3/3/16.
 */

angular.module("app.directives")
    .directive("hmdRotate", ["$interval", "randomService", hmdRotate]);

function hmdRotate($interval, randomService) {
    return {
        restrict: "A",
        link: function (scope, element, attr) {
            updateElement();

            $interval(function () {
                updateElement();
            }, 4000);

            function updateElement() {
                var generatedNumber = randomService.generateRandomNumber();
                var randomNumber = (generatedNumber - 90) * 1.35;
                var meterElement = element.parent().parent().find("img").eq(0);

                if (generatedNumber <= 60)
                    meterElement.css("background-color", "rgba(0, 128, 0, 0.2)");
                else if (generatedNumber >= 121)
                    meterElement.css("background-color", "rgba(255, 0, 0, 0.2)");
                else
                    meterElement.css("background-color", "rgba(266, 165, 0, 0.2)");

                element.css({"transform": "rotate(".concat(randomNumber, "deg)")});
            }
        }
    };
}
