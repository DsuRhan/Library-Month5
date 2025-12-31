import { v4 as uuidv4 } from 'uuid';
export default function requestId(req, res, next) {
    const id = req.header('X-Request-ID') || uuidv4();
    res.setHeader('X-Request-ID', id);
    req.requestId = id;
    next();
}
//# sourceMappingURL=requestId.js.map