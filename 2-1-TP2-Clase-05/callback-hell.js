const fs = require("fs");
const path = "./inventors.json";


// Leo el archivo
fs.readFile(path, "utf8", (err, data) => {
   if (!err) {
      data = JSON.parse(data);
      // Agrego otro inventor
      data.inventors.push({
         first: "Elon",
         last: "Musk",
         year: 2020,
      });
   }

   // el tercer parametro es lo que va a reemplazar del JSON
   fs.writeFile(path, JSON.stringify(data, null, " "), (err) => {
      if (!err) {
         // Leer archivo actualizado
         fs.readFile(path, "utf8", (err, data) => {
             if (!err) {
                 // Muestro en consola
                 console.log(JSON.parse(data));
             }
         });
      }
   });
});
