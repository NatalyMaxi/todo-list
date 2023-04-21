const errorHandler = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  console.log(err.message, err.stack);
  res.status(statusCode).send({ message });
  next();
};

module.exports = errorHandler;
