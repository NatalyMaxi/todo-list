import React from 'react';
import Grid from '../Grid/Grid';
import classes from './Task.module.css';
import { format } from 'date-fns';

const Task = ({
  heading,
  description,
  director,
  employee,
  priority,
  status,
  dateCreation,
  dateUpdate,
  deadline,
  onClick
}) => {
  const todayDay = format(new Date(), 'dd.MM.yyyy');
  const deadlineTask = format(new Date(deadline), 'dd.MM.yyyy') === todayDay ? true : false;
  const completed = status === 'Выполнен' ? true : false;

  return (
    <>
      <Grid>
        <p className={
          completed ?
            `${classes.taskTitle} ${classes.taskTitle_type_completed}` :
            deadlineTask ?
              `${classes.taskTitle} ${classes.taskTitle_type_current}` :
              `${classes.taskTitle}`
        }
          onClick={onClick}
        >
          {heading}
        </p>
        <p className={classes.taskTitle}>{description}</p>
        <p className={classes.taskTitle}>{director}</p>
        <p className={classes.taskTitle}>{employee}</p>
        <p className={classes.taskTitle}>{priority}</p>
        <p className={classes.taskTitle}>{status}</p>
        <p className={classes.taskTitle}>{format(new Date(dateCreation), 'dd.MM.yyyy')}</p>
        <p className={classes.taskTitle}>{format(new Date(dateUpdate), 'dd.MM.yyyy')}</p>
        <p className={classes.taskTitle}>{format(new Date(deadline), 'dd.MM.yyyy')}</p>
      </Grid>
    </>
  )
}

export default Task;
