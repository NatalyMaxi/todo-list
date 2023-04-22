import React from 'react';
import classes from './Grid.module.css';

const Grid = ({ children, completed, deadlineTask }) => {

  return (
    <div className={
      completed ?
        `${classes.grid} ${classes.grid_type_completed}` :
        deadlineTask ?
          `${classes.grid} ${classes.grid_type_current}` :
          `${classes.grid}`
    } >
      {children}
    </div>
  )
}

export default Grid;
