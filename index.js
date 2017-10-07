var http = require('http');
var axios = require('axios');

var  url = 'https://jsonplaceholder.typicode.com';

var instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
  
  var getTable = function(){
    axios.get(url+'/posts/1')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  var postMovend= function(){
    axios.post(url+'/posts', {
        /*     firstName: 'Fred',
            lastName: 'Flintstone' */
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
  }

