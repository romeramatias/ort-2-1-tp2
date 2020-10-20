// Importamos cliente de mongo
// const mongoClient = require("mongodb").MongoClient;
const { MongoClient } = require("mongodb");

// Crear variables de entorno, sacar hardcode del cluster connection

// Cadena de conexion para mongo
const uriMongo =
   "mongodb+srv://romeramatias:pass21@cluster0.nhbax.azure.mongodb.net/ejemplo_tp2.inventors?retryWrites=true&w=majority";

const client = new MongoClient(uriMongo, { useUnifiedTopology: true, useNewUrlParser: true });

async function getConnection() {
   return await client.connect().catch((err) => console.log(err));
}

module.exports = { getConnection };
