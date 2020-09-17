//import http from 'http';
const http = require('http');
const port = 3000;

// Crea un servidor con el metodo createServer
// Recibe dos parametros, request y response
// en caso de que se ejecute todo bien dara una respuesta
// con un tipo de archivo, un codigo y mensaje
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Todo ok');
    res.end();
}).listen(port, 'localhost', () => console.log(`Sv en ${port} port`));