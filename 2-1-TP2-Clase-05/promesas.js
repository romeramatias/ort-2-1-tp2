// Son objetos que nos van a permitir manipular algo con exito o fracaso
// Devuelven algo bien o un error

const { promises } = require("fs");

const prom = new Promise((resolve, reject) => {
   setTimeout(() => {
      // Aca se ejecuta el callback, por resolve o reject
      // resolve([1, 9, 5]);
      reject("Errooooooor");
   }, 2000);
});

console.log("Llamando Funcion 1");

prom
   .then((resultado) => {
      console.log("Todo ok");
      console.log(resultado);
   })
   .catch((err) => {
      console.log("Error");
      console.log(err);
   });

// Segunda forma
function resolver2Seg() {
   return new Promise((res, rej) => {
      setTimeout(() => {
         try {
            res("Resuelto");
         } catch (error) {
            rej("");
         }
      }, 2000);
   });
}

// Funcion async
// El await detiene la ejecucion del programa hasta que
// esa linea se resuelva

async function asyncCall() {
   console.log("Llamando Funcion 2");
   const result = await resolver2Seg();
   console.log(result);
}

asyncCall();
