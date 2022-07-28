const mongoose = require('mongoose');
const { User } = require('../models/User');

const DB_CONN = process.env.DB_CONN;

mongoose.connect(DB_CONN, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

class UserMethods {
    async create (user) {
        return await User.create(user);
    };

    async get (req) {
        return await User.findOne(req);
    };

    async getAll (req) {
        return await User.find(req);
    };
}

const user = new UserMethods();

module.exports = {
    user
}