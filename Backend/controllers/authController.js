const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const { promisify } = require('util');

const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.KEY, {
    expiresIn: process.env.EXPIRE_IN,
  });
  return token;
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

exports.signUP = catchAsync(async (req, res) => {
  const user = await User.create(req.body);

  createSendToken(user, 200, res);
});

exports.logIN = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError(`Provide Email | Password`, 404));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.comparePass(user.password, password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (req.headers && req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(
      new AppError('Your provided token is expired! Please Login Again', 404)
    );
  }

  const decode = await promisify(jwt.verify)(token, process.env.KEY);

  const freshUser = await User.findById(decode.id);

  if (!freshUser) {
    return next(new AppError('User is not found', 404));
  }

  req.user = freshUser;
  next();
});
