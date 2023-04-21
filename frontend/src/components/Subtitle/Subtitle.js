import React from 'react';
import classes from './Subtitle.module.css';

const Subtitle = (props) => {
  return (
    <p className={classes.subtitle}>
      {props.subtitle}
    </p>
  )
}

export default Subtitle;
