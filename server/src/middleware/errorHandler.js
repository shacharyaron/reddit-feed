const errorHandler = (error, request, response, next) => {
    response.status(error.status || 500);
    response.json({
        error: {
            message: error.message || "Internal Server Error."
        }
    })
}

module.exports = errorHandler;