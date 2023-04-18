const router = require('express').Router();
const auth = require('../middlewares/auth');
const NotFoundError = require('../Error/NotFoundError');
const { login } = require('../controllers/users');
const { validationLogin } = require('../middlewares/validations');

router.post('/signin', validationLogin, login); // проверяет проверяет переданные в теле почту и пароль и возвращает JWT

router.use(auth); // защищает маршруты, которым нужны авторизация

router.use('/', require('./users'));
router.use('/tasks', require('./tasks'));


router.use((req, res, next) => {
   next(new NotFoundError('Запрашиваемая страница не найдена'));
});

module.exports = router;