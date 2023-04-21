const jwt = require('jsonwebtoken');
const { where } = require('sequelize');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Subordination = require('../models/subordination');
const AuthorizationError = require('../Error/AuthorizationError');
const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.login = (req, res, next) => {
   const { email, password } = req.body;
   return User.findOne({
      where: {
         email,
      },
   })
      .then(async (user) => {
         const isPasswordValid = await bcrypt.compare(password, user.password);

         if (!isPasswordValid) {
            throw new AuthorizationError('Неверный логин или пароль')
         }

         const token = jwt.sign(
            { user_id: user.user_id },
            NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
            { expiresIn: '7d' },
         );
         res
            .send({ // получаем объект пользователя
               user_id: user.user_id,
               name: user.name,
               patronymic: user.patronymic,
               surname: user.surname,
               role: user.role,
               email: user.email,
               token
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

module.exports.getEmployee = (req, res, next) => {

   const userId = req.params.id;
   Subordination.findAll({
      include: [{
         model: User,
         as: 'emp',
         attributes: ['user_id', 'name', 'patronymic', 'surname', 'role', 'email']
      }],
      where: {
         director: userId,
      }
   }).then((users) => {
      res.send({ data: users.map(u => u.emp) });
   })
      .catch((err) => {
         console.log(err);
         next(err)
      });
};

