const Task = require('../models/task');
const CastError = require('../Error/CastError');

// GET получить все задачи
module.exports.getTasks = (req, res, next) => {
   Task.findAll() 
      .then((tasks) => {
         res.send({ data: tasks });
      })
      .catch(next);
};

// POST /tasks - создаем задачи на основании переданных данных
module.exports.createTask = async (req, res, next) => {
   const {
      heading,
      description,
      priority,
      status,
      dateCreation,
      dateUpdate,
      deadline,
      employee
   } = req.body;
   const director = req.user.user_id;
   try {
      const task = await Task.create({
         heading,
         description,
         priority,
         status,
         dateCreation,
         dateUpdate,
         deadline,
         director,
         employee
      });
      res.send(task);
   } catch (err) {
      if (err.name === 'ValidationError') {
         next(new CastError('Переданы некорректные данные'));
      } else {
         next(err);
      }
   }
};
//PATCH обновляем задачу
module.exports.updateTask = async (req, res, next) => {
   console.log('222')
   const {
      heading,
      description,
      priority,
      status,
      dateCreation,
      dateUpdate,
      deadline,
      director,
      employee,
      task_id
   } = req.body;
   console.log(director,
      heading, description, priority, status, dateCreation, dateUpdate, deadline, employee,
   )
   try {
      const task = await Task.update(
         {
            heading,
            description,
            priority,
            status,
            dateCreation,
            dateUpdate,
            deadline,
            director,
            employee,
            task_id
         },
         {
            where: {
               task_id
            }
         }
      );
      res.send(task);
   } catch (err) {
      if (err.name === 'ValidationError') {
         next(new CastError('Переданы некорректные данные'));
      } else {
         next(err);
      }
   }
};