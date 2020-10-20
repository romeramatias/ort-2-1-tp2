const fs = require("fs").promises;
const PATH = "./data/inventorsMOC.json";
const connection = require("./connection-mongo");

async function readInventorsMoc() {
   return JSON.parse(await fs.readFile(PATH, "utf8"));
}

async function writeInventorsMoc(inventors) {
   return await fs.writeFile(PATH, JSON.stringify(inventors, null, ""));
}

async function getAllInventorsMoc() {
   const connectionMongo = await connection.getConnection();
   const inventors = await connectionMongo.db("ejemplo_tp2").collection("inventors").find().toArray();
   return inventors;
}

async function getInventorMoc(id) {
   const connectionMongo = await connection.getConnection();
   const inventor = await connectionMongo
      .db("ejemplo_tp2")
      .collection("inventors")
      .findOne({ _id: parseInt(id) });
   return inventor;
}

async function pushInventorMoc(inventor) {
   const connectionMongo = await connection.getConnection();
   const resultado = await connectionMongo.db("ejemplo_tp2").collection("inventors").insertOne(inventor);
   console.log(resultado);
   return resultado;
}

async function updateInventorMoc(inventor) {
   const connectionMongo = await connection.getConnection();
   const query = { _id: parseInt(inventor._id) };
   const newValues = {
      $set: {
         first: inventor.first,
         last: inventor.last,
         year: inventor.year,
         img: inventor.img,
      },
   };
   const result = await connectionMongo.db("ejemplo_tp2").collection("inventors").updateOne(query, newValues);
   return result;
}

async function deleteInventorMoc(id) {
   const connectionMongo = await connection.getConnection();
   const result = await connectionMongo
      .db("ejemplo_tp2")
      .collection("inventors")
      .deleteOne({ _id: parseInt(id) });
   return result;
}

module.exports = { getAllInventorsMoc, getInventorMoc, pushInventorMoc, updateInventorMoc, deleteInventorMoc };
