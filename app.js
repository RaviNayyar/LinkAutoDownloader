  
const http = require('http')

const fs = require('fs')
const port = 3000
const host = '127.0.0.1'

//Citation: https://www.w3schools.com/nodejs/met_http_createserver.asp
const server = http.createServer(function(request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    //Citation: https://nodejs.dev/learn/get-http-request-body-data-using-nodejs
    if (request.method == 'GET') {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        fs.readFile('index.html', function(error, data) {
            if (error) {
                response.writeHead(404)
                response.write('Error: File Not Found')
            } else {
                response.write(data)
            }
            response.end()
        })
    }
})




server.listen(port, host)
console.log("listening on ", host + ":" + port)