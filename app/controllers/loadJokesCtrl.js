/**
 * Created by pisha91 on 10/14/15.
 */

angular.module('JokesMaker')
.controller('loadJokesCtrl', ['$scope', 'jokesService', function($scope, jokesService){
        $scope.submit = function(string){
            if($scope.loadJokesForm.$valid){
                submited = true;

                var jokes = string.split('@@@@');
                jokesService.saveItems(jokes);

                submited = false;
            }
        };
    }]);