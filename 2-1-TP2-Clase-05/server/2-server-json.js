const http = require("http");
const port = 3000;

const inventors = [
   { first: "Albert", last: "Einstein", year: 1879 },
   { first: "Isaac", last: "Newton", year: 1643 },
   { first: "Galileo", last: "Galilei", year: 1564 },
   { first: "Marie", last: "Curie", year: 1867 },
   { first: "Johannes", last: "Kepler", year: 1571 },
   { first: "Nicolaus", last: "Copernicus", year: 1473 },
   { first: "Max", last: "Planck", year: 1858 },
];

// En estos ejemplos no estamos manipulando ningun request
http
   .createServer((req, res) => {
      // Args: Codigo de Status, Content Type
      let data = JSON.stringify(inventors, null, " ");
      res.writeHead(200, { "Content-Type": "application/json" });
      // Write escribe en pantalla. Se podria enviar todo un HTML??
      res.write(data);
      res.end();
   })
   .listen(port, "localhost");

// Ejemplo de error
/* http.createServer((req, res) => {
   // Args: Codigo de Status, Content Type
    res.writeHead(404, {'Content-Type': 'application/json'});
    // Write escribe en pantalla. Se podria enviar todo un HTML??
    res.write('Archivo no encontrado');
    res.end();
}).listen(port, 'localhost'); */
