export default function timer(req, res, next) {
    req.startTime = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - (req.startTime || Date.now());
        res.setHeader('X-Response-Time', `${duration}ms`);
    });
    next();
}
//# sourceMappingURL=timer.js.map