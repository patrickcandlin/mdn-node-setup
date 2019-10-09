const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((reqest, response) => {

    response.statusCode = 200
    response.setHeader('Content-type', 'text/plain');
    response.end('Hello Patrick')
})

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname} : ${port}/`)
})