class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    // status: fail or error
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    // operational error
    this.isOperational = true;
    // capture the stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = AppError;
