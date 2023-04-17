const routes = require('express').Router();

const {
   getUsers,
} = require('../controllers/users');

routes.get('/', getUsers);

module.exports = routes;