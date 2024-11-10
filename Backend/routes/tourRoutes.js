const express = require('express');
const tourController = require('../controllers/tourController');
const tour = require('../models/tourModel');

const router = express.Router();

router.param('id', tourController.checkID);

router.route('/get-tour-states').get(tourController.getStats);

router.route('/').get(tourController.allTours).post(tourController.creatTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .delete(tourController.deletTour)
  .patch(tourController.updateTour);

module.exports = router;
