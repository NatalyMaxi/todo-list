import React from 'react';
import Header from '../Header/Header';
import Subtitle from '../Subtitle/Subtitle';
import Task from '../Task/Task'
import classes from './TaskList.module.css';
import Grid from '../Grid/Grid';
import Button from '../Button/Button';
import SortingElement from '../SortingElement/SortingElement';

const TaskList = ({ onAddTask, loggedIn, tasks, onSignOut, onFilter, sortTasks, role, }) => {

  return (
    <>
      <Header loggedIn={loggedIn} onSignOut={onSignOut} />
      <section className={classes.taskList}>
        <div className={classes.taskList__content}>
          <div className={classes.taskList__wrapper}>
            <SortingElement
              onFilter={onFilter}
              sortTasks={sortTasks}
              role={role} />
            <Button
              type='button'
              text='Новая задача'
              onClick={onAddTask}
              role={role}
            />
          </div>
          <div className={classes.taskList__grid}>
            <Grid >
              <Subtitle subtitle='Заголовок задачи' />
              <Subtitle subtitle='Описание' />
              <Subtitle subtitle='Добавлена' />
              <Subtitle subtitle='Руководитель' />
              <Subtitle subtitle='Исполнитель' />
              <Subtitle subtitle='Дедлайн' />
              <Subtitle subtitle='Приоритет' />
              <Subtitle subtitle='Статус' />
              <Subtitle subtitle='Обновлена' />

            </Grid>
            {
              tasks.map((task) => {
                return <Task
                  key={task.task_id}
                  heading={task.heading}
                  description={task.description}
                  director={`${task.dir.name[0]}.${task.dir.patronymic[0]}. ${task.dir.surname}`}
                  employee={`${task.emp.name[0]}.${task.emp.patronymic[0]}. ${task.emp.surname}`}
                  priority={task.priority}
                  status={task.status}
                  dateCreation={task.dateCreation}
                  dateUpdate={task.dateUpdate}
                  deadline={task.deadline}
                  onClick={onAddTask}
                />
              })
            }
          </div>
        </div>
      </section>
    </>

  )
}

export default TaskList;
