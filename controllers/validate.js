const Joi = require('@hapi/joi');

const registerValidate = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).max(30).required(),
        email: Joi.string().min(6).max(50).required().email(),
        password: Joi.string().min(6).max(100).required()
    });
    return schema.validate(data);
}

const loginValidate = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).max(50).required().email(),
        password: Joi.string().min(6).max(60).required()
    });
    return schema.validate(data);
}

module.exports.registerValidate = registerValidate;
module.exports.loginValidate = loginValidate;