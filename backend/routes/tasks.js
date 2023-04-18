const router = require('express').Router();

const {
   getTasks,
   createTask,
   updateTask
} = require('../controllers/tasks');


router.get('/', getTasks);
router.post('/', createTask);
router.patch('/task', updateTask);

module.exports = router;