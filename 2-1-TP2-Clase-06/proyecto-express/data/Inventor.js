const fs = require("fs").promises;
const PATH = "./data/inventorsMOC.json";

async function readInventorsMoc() {
   return JSON.parse(await fs.readFile(PATH, "utf8"));
}

async function writeInventorsMoc(inventors) {
   return await fs.writeFile(PATH, JSON.stringify(inventors, null, ""));
}

async function getAllInventorsMoc() {
   return await readInventorsMoc();
}

async function getInventorMoc(id) {
   const data = await readInventorsMoc();
   const inventor = data.inventors.find((inventor) => inventor._id == id);
   return inventor;
}

async function pushInventorMoc(inventor) {
   const data = await readInventorsMoc();
   data.inventors.push(inventor);
   await writeInventorsMoc(data);
}

function updateInventorMoc(inventor) {}

function deleteInventorMoc(id) {}

module.exports = { getAllInventorsMoc, getInventorMoc, pushInventorMoc, updateInventorMoc, deleteInventorMoc };
