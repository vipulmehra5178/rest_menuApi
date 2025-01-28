export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
      error: true,
      message: err.message || "Server Error",
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
  };
  