const Plant = require('../models/plant-model');

class PlantRepository {
  create(plantData) {
    const plant = new Plant(plantData);
    return plant.save();
  }

  list() {
    return Plant.find();
  }

  batchInsert(plants) {
    return Plant.insertMany(plants);
  }
}

module.exports = new PlantRepository();
