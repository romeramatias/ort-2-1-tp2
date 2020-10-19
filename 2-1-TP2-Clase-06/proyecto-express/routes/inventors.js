const express = require("express");
const router = express.Router();
const dataInventors = require("../data/Inventor");

// GET Todos los inventores
router.get("/", async (req, res) => {
   const data = await dataInventors.getAllInventorsMoc();
   res.json(data);
});

// GET Un inventor
router.get("/:id", async (req, res) => {
   res.json(await dataInventors.getInventorMoc(req.params.id));
});

router.post("/", async (req, res) => {
   const inventor = req.body;
   await dataInventors.pushInventorMoc(inventor);
   const inventorPersistido = await dataInventors.getInventorMoc(inventor._id);
   res.json(inventorPersistido);
});

module.exports = router;
