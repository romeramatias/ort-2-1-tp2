const fs = require("fs");
const path = "./videos.txt";

let datos = fs.readFileSync(path, "utf8");

datos = datos.split("<ul>").join("");
datos = datos.split("</ul>").join(" ");
datos = datos.split("<li").join(" ");
datos = datos.split("</li>").join(" ");
datos = datos.split(">").join("|");
datos = datos.split("</li").join(" ");
datos = datos.split("</ul").join(" ");
datos = datos.split("data-time=").join(" ");
datos = datos.split('"').join(" ");
datos = datos.trim();
datos = datos.split(" ").join("");

datos = datos.split("\r\n").join("|");

datos = datos.split("|");

/*  const path2 = "./videosReducido.txt";
fs.writeFileSync(path2, datos);
*/
let duraciones = [];

console.log(datos);

for (let i = 0; i < datos.length; i++) {
   console.log(datos[i]);
   if (datos[i + 1] === "ReduxVideo") {
      duraciones.push(datos[i]);
   }
   i++;
}

console.log(duraciones);

duraciones = duraciones.join(":");
duraciones = duraciones.split(":");

console.log(duraciones);

let totalSegundos = 0;
for (let i = 0; i < duraciones.length; i++) {
   duraciones[i] = parseInt(duraciones[i]);
   if (i === 0) {
      totalSegundos += duraciones[i] * 60;
   } else if (i % 2 === 0) {
      totalSegundos += duraciones[i] * 60;
   } else {
      totalSegundos += duraciones[i];
   }
}

let totalMinutos = totalSegundos / 60;
let totalMinutosSegundos = (totalMinutos - parseInt(totalMinutos)) * 60;

console.log(`El total de segundo de video es: ${totalSegundos} segundos`);
console.log(
   `El total de minutos y segundos de video es: ${parseInt(totalMinutos)} minutos con ${parseInt(
      totalMinutosSegundos
   )} segundos`
);
