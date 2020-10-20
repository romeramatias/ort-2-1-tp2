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
   try {
      const result = await dataInventors.pushInventorMoc(inventor);
      res.json(result);
   } catch (error) {
      res.status(500).send(error);
   }
});

// Modificacion de inventor
router.put("/:id", async (req, res) => {
   const inventor = req.body;
   try {
      inventor._id = req.params.id;
      const result = await dataInventors.updateInventorMoc(inventor);
      res.json(result);
   } catch (error) {
      res.status(500).send(error);
   }
});

// Eliminacion de inventor
router.delete("/:id", async (req, res) => {
   try {
      const result = await dataInventors.deleteInventorMoc(req.params.id);
      res.send(result);
   } catch (error) {
      res.status(500).send(error);
   }
});

module.exports = router;
