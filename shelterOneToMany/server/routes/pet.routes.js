const router = require('express').Router();

const petController = require('../contollers/pet.controller');
module.exports = router
    .get('/',petController.index)
    .post('/',petController.create)
    .get('/:petId',petController.show)
    .put('/:petId',petController.update)
    .delete('/:petId',petController.destroy);