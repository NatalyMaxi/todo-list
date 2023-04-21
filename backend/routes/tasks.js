const router = require('express').Router();
const { validationCreateTask, validationUpdateTask } = require('../middlewares/validations');

const {
  getTasks,
  createTask,
  updateTask
} = require('../controllers/tasks');

router.get('/', getTasks);
router.post('/', validationCreateTask, createTask);
router.patch('/task', validationUpdateTask, updateTask);

module.exports = router;
