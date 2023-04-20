import React from 'react';
import Header from '../Header/Header';
import Subtitle from '../Subtitle/Subtitle';
import Task from '../Task/Task'
import classes from './TaskList.module.css';
import Grid from '../Grid/Grid';
import Button from '../Button/Button';
import SortingElement from '../SortingElement/SortingElement';

const TaskList = ({ onAddTask, loggedIn, tasks, onSignOut }) => {
   return (
      <>
         <Header loggedIn={loggedIn} onSignOut={onSignOut} />
         <section className={classes.taskList}>
            <div className={classes.taskList__content}>
               <div className={classes.taskList__wrapper}>
                  <SortingElement />
                  <Button
                     type='button'
                     text='Новая задача'
                     onClick={onAddTask}
                  />
               </div>
               <div className={classes.taskList__grid}>
                  <Grid>
                     <Subtitle subtitle='Заголовок задачи' />
                     <Subtitle subtitle='Описание' />
                     <Subtitle subtitle='Руководитель' />
                     <Subtitle subtitle='Исполнитель' />
                     <Subtitle subtitle='Приоритет' />
                     <Subtitle subtitle='Статус' />
                     <Subtitle subtitle='Дата добавления' />
                     <Subtitle subtitle='Дата обновления' />
                     <Subtitle subtitle='Дата исполнения' />
                  </Grid>
                  {
                     tasks.map((task) => {
                        return <Task
                           key={task.id}
                           heading={task.heading}
                           description={task.description}
                           director={task.director}
                           responsible={task.responsible}
                           priority={task.priority}
                           status={task.status}
                           dateCreation={task.dateCreation}
                           dateUpdate={task.dateUpdate}
                           deadline={task.deadline}
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