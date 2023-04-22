import React from 'react';
import classes from './Title.module.css';

const Title = (props) => {
  return (
    <div className={classes.title}>
      {props.title}
    </div>
  )
}

export default Title;
