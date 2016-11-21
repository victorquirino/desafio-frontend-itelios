angular.module('services', [])

  .service('ProductService', function($q, $http){
    this.getProducts = function () {
      var dfd = $q.defer();
      var url = 'http://www.itelios.com.br/Arquivos/TesteFront/produtos.php';

      $http.get(url, {suppressLoading: true})
        .success(function (data) {
            var productList = angular.toJson(data);
            console.log(productList);
            //dfd.resolve(productList);
        })
        .error(function (data, status, headers) {
            dfd.reject({"data": data, "status": status, "headers": headers});
        });

      return dfd.promise;
    };
  })
;
