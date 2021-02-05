const SERVER_ERROR_MESSAGE = "Internal Server Error."

const errorHandler = (error, request, response, next) => {
    const errorStatus = error.status || 500;
    const errorMessage = errorStatus >= 500 ? SERVER_ERROR_MESSAGE : error.message;

    response.status(errorStatus);
    response.json({
        error: {
            message: errorMessage
        }
    })
}

module.exports = errorHandler;