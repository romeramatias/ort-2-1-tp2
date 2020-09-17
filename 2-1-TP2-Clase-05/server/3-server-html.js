const http = require("http");
const chalk = require("chalk");
const fs = require("fs");
const port = 3000;

http
   .createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      let data = fs.readFileSync("./3-index.html", "utf8");
      data = data.replace("{{mensaje}}", "Hola desde Create Sv");
      res.end(data);
   })
   .listen(port, "localhost", () => {
       console.log(chalk.blue('Sv disponible'));
   });
