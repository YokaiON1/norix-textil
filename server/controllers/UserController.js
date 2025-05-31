const ApiError = require('../error/ApiError');
class UserController {
    async registration(req, res) {
        const { email, password } = req.body;
        res.json({ message: 'User registered', email });
    }

    async login(req, res) {
        const { email, password } = req.body;
        res.json({ message: 'User logged in', email });
    }

    async check(req, res, next) {
        const  { userId } = req.query;
        if (!userId) {
            next(ApiError.badRequest("не указан userId"));
        }
        res.json({userId });

    }
}

module.exports = new UserController();