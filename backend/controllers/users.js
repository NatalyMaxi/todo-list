const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { NODE_ENV, JWT_SECRET } = process.env;

// Афторизация
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
               password: user.password
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