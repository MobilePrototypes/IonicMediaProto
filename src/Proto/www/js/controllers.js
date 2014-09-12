angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('NewsCtrl', function($scope, News) {
  $scope.news = News.all();
   var $container = document.getElementById("container");
    var msnry =  new Masonry( $container,{
        columnWidth: 100, 
        itemSelector:'.masonry-brick',
        gutter: 5, 
        transitionDuration: '.9s', 
        hiddenStyle: {
            opacity: .001,
            transform: 'scale(0.01)', 
            transform: 'rotate(200deg)'
        }, 
        visibleStyle: {
           opacity: 1, 
           transform: 'rotate(200deg)'
        }
    });
    
/*    
jQuery
var $container = $('#container');

    $container.masonry({
      itemSelector : '.masonry-brick',
      columnWidth : 135
  });
  
  ref : http://jsfiddle.net/C2mCw/2/
  */

    

})

.controller('NewsDetailCtrl', function($scope, $stateParams, News) {
  $scope.new = News.get($stateParams.newsId);
  
})

.controller('AccountCtrl', function($scope) {
   
});
