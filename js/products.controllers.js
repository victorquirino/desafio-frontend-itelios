angular.module('main', ['services'])

  .controller('MainCtrl', function($scope, ProductService){
    $scope.teste = 'teste';
    ProductService.getProducts()
    .then(function (){

    })
    .catch(function (){

    })
  })
;
