const { Router } = require('express');

const { checker } = require('../middlewares/checker');
const { db } = require('../middlewares/db');
const { emailSchema } = require('../middlewares/validations');

const get = Router();

get.get('', checker.validate(emailSchema), async (req, res) => {
    const data = await db.reader({ email: req.query.email }, true);

    if (data.length > 0) {
        checker.sendNames(res, data);
    } else {
        res.status(200).send('List empty');
    }
});

module.exports = {
    get
}