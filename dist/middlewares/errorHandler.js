import { errorResponse } from '../utils/responses';
export default function errorHandler(err, req, res, next) {
    console.error('ERROR', err);
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    const errors = err.errors || [];
    res.status(status).json(errorResponse(message, errors));
}
//# sourceMappingURL=errorHandler.js.map