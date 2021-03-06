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
  res.status(error.status).json({ error });
  next(error);
};

module.exports = { notFound, systemError };
