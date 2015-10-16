/**
 * Created by pisha91 on 10/12/15.
 */

angular.module('JokesMaker')
.factory('jokesService', ['$window', function($window){
        var storage = $window.localStorage;
        var currentItemIndexKey = 'currentItemIndex';
        var countKey = 'count';
        var jokesKey = 'jokes';

        function getNextIndex(index, count){
            if(index){
                index++;
                if(index >= count){
                    index -= count;
                }

                return index;
            }

            return 0;
        };

        function getItems(){
            var jokesString = storage.getItem(jokesKey);
            var jokes = JSON.parse(jokesString);

            return jokes;
        };

        var jokesService = {
            nextItem: function(){
                var currentItemIndex = storage.getItem(currentItemIndexKey);
                var count = storage.getItem(countKey);

                currentItemIndex = getNextIndex(currentItemIndex, count);
                storage.setItem(currentItemIndexKey, currentItemIndex);
                var jokes = getItems();

                return jokes[currentItemIndex];
            },
            updateCurrentItem: function(item){
                var currentItemIndex = storage.getItem(currentItemIndexKey);
                var jokes = getItems();
                jokes[currentItemIndex] = item;

                var jokesString = JSON.stringify(jokes);
                storage.setItem(jokesKey, jokesString)
            },
            saveItems: function(items){
                var count = items.length;
                var jokes = items.map(function(joke){
                    return { text: joke, likeCount: 0, dislikeCount: 0 };
                });

                var jokesString = JSON.stringify(jokes);
                storage.setItem(countKey, count);
                storage.setItem(jokesKey, jokesString);
            }
        };

        return jokesService;
    }]);