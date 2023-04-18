const jwt = require('jsonwebtoken');
const { where } = require('sequelize');
const User = require('../models/user');
const Subordination = require('../models/subordination')
const { NODE_ENV, JWT_SECRET } = process.env;

// Авторизация
module.exports.login = (req, res, next) => {
   const { email, password } = req.body;
   return User.findOne({
      where: {
         email,
         password
      },
   })
      .then((user) => {
         const token = jwt.sign(
            { user_id: user.user_id },
            NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
            { expiresIn: '7d' },
         );
         res
            .cookie('jwt', token, {
               maxAge: 3600000 * 24 * 7,
               httpOnly: true,
            })
            .send({ // получаем объект пользователя
               user_id: user.user_id,
               name: user.name,
               patronymic: user.patronymic,
               surname: user.surname,
               role: user.role,
               email: user.email,
            });
      })
      .catch(next);
};

// Получаем всех пользователей
module.exports.getUsers = (req, res, next) => {
   User.findAll()
      .then((users) => {
         res.send({ data: users });
      })
      .catch(next);
};

// Получаем всех сотрудников руководителя
module.exports.getEmployee = (req, res, next) => {
   const userId = req.body.user_id;
   Subordination.findAll({
      include: User,
      where: {
         director: userId
      }
   }).then((users) => {
      console.log(123);
      res.send({ data: users });
   })
      .catch((err) => {
         console.log(err);
         next(err)
      });
};