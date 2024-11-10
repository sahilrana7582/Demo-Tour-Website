const Tour = require('../models/tourModel');
const ApiFeatures = require('../utils/apiFeatures');

// Route Handler: allTours
exports.allTours = async (req, res) => {
  try {
    const features = new ApiFeatures(Tour.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const tours = await features.query;
    res.status(200).json({
      status: 'Success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (e) {
    console.error('Error:', e); // Log the error for debugging
    res.status(400).json({
      status: 'Failed',
      data: {
        Message: 'Not able to get all tours',
      },
    });
  }
};

exports.creatTour = async (req, res) => {
  try {
    const tours = await Tour.create(req.body);
    res.status(200).json({
      status: 'Sucess',
      data: {
        tours,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: 'Failed',
      message: 'Not able to create tour',
    });
  }
};

exports.getTour = (req, res) => {
  const msg = req.body;
  res.status(200).json({
    status: 'Sucess',
    data: {
      msg,
    },
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'Sucess',
    data: {
      msg: 'This is update',
    },
  });
};

exports.deletTour = (req, res) => {
  res.status(200).json({
    status: 'Sucess',
    data: {
      msg: 'This is Delete',
    },
  });
};
