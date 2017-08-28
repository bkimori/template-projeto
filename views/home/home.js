angular.module("starter")

.controller("HomeCtrl", function($scope, $ionicPlatform, EchoFactory) {
  $ionicPlatform.ready(function() {
    alert("b");
    $scope.data = {
      texto: null
    };
    
    $scope.mostraTeclado = function() {
      cordova.plugins.Keyboard.show();
    };
    
    $scope.retornaMsg = function() {
      alert("c");
      EchoFactory.retornaMensagem($scope.data.texto).then(function() {
        alert("Plugin executado corretamente!");
      });
    }
  });
});