const routes = require('express').Router();

const {
  getUsers,
  getEmployee
} = require('../controllers/users');

routes.get('/', getUsers);
routes.get('/employee/:id/subordination', getEmployee);

module.exports = routes;
