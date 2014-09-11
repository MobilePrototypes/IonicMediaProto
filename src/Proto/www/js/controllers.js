angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('NewsCtrl', function($scope, News) {
  $scope.news = News.all();
})

.controller('NewsDetailCtrl', function($scope, $stateParams, News) {
  $scope.new = News.get($stateParams.newsId);
})

.controller('AccountCtrl', function($scope) {
});
