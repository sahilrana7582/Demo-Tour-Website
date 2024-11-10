const Tour = require('../models/tourModel');

exports.allTours = async (req, res) => {
  try {
    let queryObj = { ...req.query };
    const exclude = ['fields', 'sort', 'limit', 'page'];
    exclude.map((ele) => delete queryObj[ele]);

    //Advanced Filter
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (m) => `$${m}`);
    queryStr = JSON.parse(queryStr);
    let query = Tour.find(queryStr);

    //Sort
    if (req.query.sort) {
      const sortBy = req.query.sort;
      query = query.sort(sortBy);
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    }

    //Limit
    const page = req.query.page * 1 || 1;
    const limitDoc = req.query.limit * 1 || 3;
    const skipDoc = (page - 1) * limitDoc;

    query = query.skip(skipDoc).limit(limitDoc);

    const tours = await query;
    res.status(200).json({
      status: 'Success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (e) {
    res.status(200).json({
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
