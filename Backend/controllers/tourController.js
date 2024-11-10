const Tour = require('../models/tourModel');
const ApiFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');

exports.allTours = catchAsync(async (req, res) => {
  console.log(req.headers.authorization);
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
});

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
exports.getStats = async (req, res) => {
  try {
    const stats = await Tour.aggregate([
      {
        $match: { ratingsAverage: { $gte: 4.5 } },
      },
      {
        $group: {
          _id: '$difficulty',
          numTours: { $sum: 1 },
          numRatings: { $sum: '$ratingsQuantity' },
          avgRating: { $avg: '$ratingsAverage' },
          avgPrice: { $avg: '$price' },
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' },
        },
      },
      {
        $sort: { avgPrice: 1 },
      },
    ]);

    console.log('Hello');
    res.status(200).json({
      status: 'Success',
      data: {
        stats,
      },
    });
  } catch (e) {
    res.status(404).json({
      status: 'Failed',
      message: e.message,
    });
  }
};

exports.checkID = (req, res, next, val) => {
  if (!val) {
    res.status(404).json({
      status: 'Failed',
      message: 'No id Found',
    });
  }
  next();
};
