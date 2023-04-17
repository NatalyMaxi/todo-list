const { celebrate, Joi } = require('celebrate');

const validationLogin = celebrate({
   body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
   }),
});

module.exports = {
   validationLogin,
};