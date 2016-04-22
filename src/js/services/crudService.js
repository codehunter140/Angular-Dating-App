(function () {

  'use strict';

  angular.module('myApp')
    .service('crudService', crudService);

  crudService.$inject = ['$http'];

  function crudService($http) {

    return {
      getAll: function(resource) {
        return $http.get('https://galvanize-student-apis.herokuapp.com/gdating/'+resource)
          .then(function(res){
            return res;
          })
          .catch(function(err){
            return err;
          });
      },
      getOne: function(resource) {
        return $http.get('https://galvanize-student-apis.herokuapp.com/gdating/'+resource)
          .then(function(res){
            return res;
          })
          .catch(function(err){
            return err;
          });
      },
      addOne: function(resource, payload) {
        return $http.post('https://galvanize-student-apis.herokuapp.com/gdating/' + resource, payload)
          .then(function(res){
            return res;
          })
          .catch(function(err){
            return err;
          });
      },
      editOne: function(resource, payload) {
        return $http.put('/'+resource+'/'+payload._id, payload)
          .then(function(res){
            return res;
          })
          .catch(function(err){
            return err;
          });
      },
      removeOne: function(resource, uuid) {
        return $http.delete('/'+resource+'/'+uuid)
          .then(function(res){
            return res;
          })
          .catch(function(err){
            return err;
          });
      }
    };

  }

})();