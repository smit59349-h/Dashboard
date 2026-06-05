let http = require('http');
let fs = require('fs');

http.createServer((request, response) => {

    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    fs.readFile('./sample.html', (error, data) => {

        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }

        response.end();
    });

}).listen(8081);
