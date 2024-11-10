const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.KEY, {
    expiresIn: process.env.EXPIRE_IN,
  });

  return token;
};

exports.signUP = catchAsync(async (req, res) => {
  const user = await User.create(req.body);
  const token = signToken(user.id);
  res.status(200).json({
    status: 'Sucess',
    token,
    data: {
      user,
    },
  });
});
