import React from 'react';
import classes from './Title.module.css';

const Title = (props) => {
  return (
    <p className={classes.title}>
      {props.title}
    </p>
  )
}

export default Title;
