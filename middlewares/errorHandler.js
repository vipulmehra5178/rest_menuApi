export const errorHandler = (err, req, res, next) => {
  console.error(err);

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    error: true,
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
