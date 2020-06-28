const notFound = (req, res, next) => {
  res.status(404).json({ error: 'Resource not found' });
  next();
};

const systemError = (err, req, res, next) => {
  const showErrorInfo = process.env.NODE_ENV === 'dev';
  const error = {
    message: showErrorInfo ? err.toString() : 'System error',
    stack: showErrorInfo ? err.stack : { },
  };
  res.status(500).json({ error });
  next();
};

module.exports = { notFound, systemError };
