const { celebrate, Joi } = require('celebrate');

const validationLogin = celebrate({
   body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
   }),
});

const validationCreateTask = celebrate({
   body: Joi.object().keys({
      heading: Joi.string().min(2).max(60).required(),
      description: Joi.string().min(2).max(100).required(),
      priority: Joi.string().required(),
      status: Joi.string().required(),
      dateCreation: Joi.string().required(),
      dateUpdate: Joi.string().required(),
      deadline: Joi.string().required(),
      director: Joi.number().required(),
      employee: Joi.number().required(),

   }),
});

const validationUpdateTask = celebrate({
   body: Joi.object().keys({
      heading: Joi.string().min(2).max(60).required(),
      description: Joi.string().min(2).max(100).required(),
      priority: Joi.string().required(),
      status: Joi.string().required(),
      dateCreation: Joi.string().required(),
      dateUpdate: Joi.string().required(),
      deadline: Joi.string().required(),
      director: Joi.number().required(),
      employee: Joi.number().required(),
      task_id: Joi.number().required(),

   }),
});

module.exports = {
   validationLogin,
   validationCreateTask,
   validationUpdateTask
};