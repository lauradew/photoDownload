var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         console.log("Error");
       })
       .on('response', function (response) {
         console.log('Downloading file', response.statusMessage);
         console.log('Download Complete');
       })
       .pipe(fs.createWriteStream('./future.jpg'));
