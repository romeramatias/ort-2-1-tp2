const fs = require("fs");
const path = "./videos.txt";

let datos = fs.readFileSync(path, "utf8");

const videosComoObjetos = (cadena) => {
   return cadena
      .replace("<ul>", "")
      .replace("</ul>", "")
      .split("</li>")
      .slice(0, -1)
      .map((v) => ({
         minutos: parseInt(v.split('"')[1].split(":")[0]),
         segundos: parseInt(v.split(":")[1].split('"')[0]),
         tipo: v.split(">")[1],
      }));
};

const totalSegundos = (videos, tipo) => {
   let segundos = 0;
   videos
      .filter((v) => v.tipo === tipo)
      .forEach((v) => {
         segundos += v.minutos * 60 + v.segundos;
      })
   return segundos;
};

console.log(totalSegundos(videosComoObjetos(datos), "Redux Video"));
