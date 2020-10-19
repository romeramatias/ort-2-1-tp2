const express = require("express");
const chalk = require("chalk");

const app = express();
const PORT = 3030;

const inventors = [
   { first: 'Albert', last: 'Einstein', year: 1879 },
   { first: 'Isaac', last: 'Newton', year: 1643 },
   { first: 'Galileo', last: 'Galilei', year: 1564 },
   { first: 'Marie', last: 'Curie', year: 1867 },
   { first: 'Johannes', last: 'Kepler', year: 1571 },
   { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
   { first: 'Max', last: 'Planck', year: 1858 },
 ];

// localhost:3030
app.get("/", (req, res) => {
   console.log("Todo ok");
   res.send('Oka')
});

app.get("/api/inventors", (req, res) => {
   res.json(inventors)
});

app.get("/api/inventors/:id", (req, res) => {
   res.json(inventors[req.params.id-1])
});

app.listen(PORT, () => console.log(chalk.bgBlackBright.white("Servidor en Puerto", PORT)));
