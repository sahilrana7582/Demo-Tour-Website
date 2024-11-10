const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

router.route('/').get(tourController.allTours).post(tourController.creatTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .delete(tourController.deletTour)
  .patch(tourController.updateTour);

module.exports = router;
