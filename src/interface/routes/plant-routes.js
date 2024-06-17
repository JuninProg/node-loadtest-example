const express = require('express');
const router = express.Router();
const PlantRepository = require('../../infra/repositories/plant-repository');

router.post('/plants/seed', async (req, res) => {
  try {
    const plants = await PlantRepository.batchInsert(
      require('../../infra/seeds/plants.json')
    );
    res.status(201).json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/plants', async (req, res) => {
  try {
    const plant = await PlantRepository.create(req.body);
    res.status(201).json(plant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/plants', async (req, res) => {
  try {
    const plants = await PlantRepository.list();
    res.status(200).json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
