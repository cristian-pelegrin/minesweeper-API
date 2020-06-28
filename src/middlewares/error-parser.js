const notFound = (req, res, next) => {
  const err = new Error('Resource not Found');
  err.status = 404;
  next(err);
};

const systemError = (err, req, res, next) => {
  const showErrorInfo = process.env.NODE_ENV === 'dev';
  const error = {
    message: showErrorInfo ? err.toString() : 'System error',
    stack: showErrorInfo ? err.stack : { },
    status: err.status || 500,
  };
  res.status(err.status).json({ error });
  next();
};

module.exports = { notFound, systemError };
