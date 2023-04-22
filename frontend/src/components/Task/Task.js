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
  const completed = status === 'Выполнена' ? true : false;

  return (
    <>
      <Grid completed={completed} deadlineTask={deadlineTask}>
        <div className={classes.taskTitle}
          onClick={onClick}
        >
          {heading}
        </div>
        <div className={classes.taskTitle}>{description}</div>
        <div className={classes.taskTitle}>{format(new Date(dateCreation), 'dd.MM.yyyy')}</div>
        <div className={classes.taskTitle}>{director}</div>
        <div className={classes.taskTitle}>{employee}</div>
        <div className={classes.taskTitle}>{format(new Date(deadline), 'dd.MM.yyyy')}</div>
        <div className={classes.taskTitle}>{priority}</div>
        <div className={classes.taskTitle}>{status}</div>
        <div className={classes.taskTitle}>{format(new Date(dateUpdate), 'dd.MM.yyyy')}</div>
      </Grid>
    </>
  )
}

export default Task;
