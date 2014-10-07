// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic.contrib.ui.cards'])

.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})

// .controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate,  $rootScope) {
//   $rootScope.accepted = 0;
//   $rootScope.rejected = 0;
//   var cardTypes = [
//     { title: 'Swipe down to clear the card', image: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic.png' },
//     { title: 'Where is this?', image: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic.png' },
//     { title: 'What kind of grass is this?', image: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic2.png' },
//     { title: 'What beach is this?', image: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic3.png' },
//     { title: 'What kind of clouds are these?', image: 'http://ionicframework.com.s3.amazonaws.com/demos/ionic-contrib-swipecards/pic4.png' }
//   ];

//   $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

//   $scope.cardSwiped = function(index) {
//     $scope.addCard();
//   };

//   $scope.cardDestroyed = function(index) {
//     if (this.swipeCard.positive === true) {
//       $scope.$root.accepted++;
//     } else {
//       $scope.$root.rejected++;
//     }
//     $scope.cards.splice(index, 1);
//   };

//   $scope.addCard = function() {
//     var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
//     newCard.id = Math.random();
//     $scope.cards.push(angular.extend({}, newCard));
//   }
// })

// .controller('CardCtrl', function($scope, $ionicSwipeCardDelegate, $rootScope) {
//   $scope.accept = function () {
//     var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
//     $rootScope.accepted++;
//     card.swipe(true);
//   }
//   $scope.reject = function() {
//     var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
//     $rootScope.rejected++;
//     card.swipe();
//   };
// })

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
