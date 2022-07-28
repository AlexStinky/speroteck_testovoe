const joi = require('joi');

const ageSchema = joi.object().keys({
    name: joi.string().required(),
    surname: joi.string().required(),
    age: joi.number().min(19).required(),
});

const emailSchema = joi.object().keys({
    email: joi.string().email().required()
});

const addSchema = joi.object().keys({
    name: joi.string().required(),
    surname: joi.string().required(),
    age: joi.number().min(19).required(),
    email: joi.string().email().required()
}).options({ allowUnknown: true });

module.exports = {
    ageSchema,
    emailSchema,
    addSchema
}