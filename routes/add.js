const { Router } = require('express');

const { checker } = require('../middlewares/checker');
const { db } = require('../middlewares/db');
const { ageSchema, addSchema } = require('../middlewares/validations');

const add = Router();
const add2 = Router();

add.post('', checker.validate(ageSchema), (req, res) => {
    res.send(`Hello ${req.query.name} ${req.query.surname}`);
});

add2.post('', checker.validate(addSchema), async (req, res) => {
    await db.creator(req.query);

    res.send('Done!');
});

module.exports = {
    add,
    add2
}