class RestAdapter {
    static route = (route) => {
        return async (req, res) => {
            const { response, statusCode } = await route.handle({
                data: { ...req.body, ...req.query, ...req.params },
                body: req.body,
                userId: req.userId,
            });

            return res.status(statusCode).json(response);
        };
    };

    static middleware = (middleware) => {
        return async (req, res, next) => {
            const { response, statusCode } = await middleware.handle({
                data: { ...req.body, ...req.query, ...req.params },
                userId: req.userId,
                headers: req.headers,
            });

            if (
                (statusCode > 399 && statusCode < 500) ||
                response instanceof Error
            )
                return res.status(statusCode).json(response);

            const userId = response;

            if (response) req.userId = userId;

            return next();
        };
    };
}

module.exports = RestAdapter;
