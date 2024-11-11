const express = require('express');
const tourController = require('../controllers/tourController');
const tour = require('../models/tourModel');
const authController = require('../controllers/authController');

const router = express.Router();

router.param('id', tourController.checkID);

router.route('/get-tour-states').get(tourController.getStats);

router
  .route('/')
  .all(authController.protect)
  .get(tourController.allTours)
  .post(tourController.creatTour);

router
  .route('/:id')
  .all(authController.protect)
  .get(tourController.getTour)
  .delete(tourController.deletTour)
  .patch(tourController.updateTour);

module.exports = router;
