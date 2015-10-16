/**
 * Created by pisha91 on 10/12/15.
 */

angular.module('JokesMaker')
.controller('mainCtrl', ['$scope', 'jokesService', function($scope, jokesService){
        $scope.joke = jokesService.nextItem();

        $scope.next = function(){
            $scope.joke = jokesService.nextItem();
        }

        $scope.like = function(){
            $scope.joke.likeCount++;
            jokesService.updateCurrentItem($scope.joke);
        }

        $scope.dislike = function(){
            $scope.joke.dislikeCount++;
            jokesService.updateCurrentItem($scope.joke);
        }
    }]);