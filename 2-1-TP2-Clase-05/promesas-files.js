// 1.- Leer el archivo inventors.json
// 2.- Insertar un inventor
// 3.- Actualizar el archivo
// 4.- Leer el archivo actualizado
// 5.- Mostrarmos en consola el listado.

// Llama a promesas??
//import { promises as fs } from "fs";
const fs = require('fs').promises;
const path = "./inventors.json";

// Que sentido tiene que pare la ejecucion de un programa con el await
// en programacion asincrona???? ya que sirve para seguir ejecutando
// las lineas de codigo siguientes sin tener que esperar que termine alguna anterior
async function operacionInventors() {
   try {
      // Leo el archivo sin callback
      let data = await fs.readFile(path, "utf8");

      // Parseo el string leido a un JSON
      data = JSON.parse(data);
      // Agrego un inventor
      data.inventors.push({
         first: "Steve",
         last: "Jobs",
         year: 1955,
      });

      // Escribo el archivo como string con el inventor nuevo
      data = JSON.stringify(data, null, ' ')
      // Uso await en read y write xq puede tardar un tiempo en hacer la ejecucion
      // Args: Archivo a escribir, datos enviados
      await fs.writeFile(path, data);
      console.log(await fs.readFile(path, 'utf8'));
    } catch (error) {
        console.log('Hubo un error');
    }
}

operacionInventors();
