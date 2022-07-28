const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    surname: String,
    age: Number,
    email: String
}, { versionKey: false });

const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}