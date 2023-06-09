import React from 'react';
import classes from './Subtitle.module.css';

const Subtitle = (props) => {
  return (
    <div className={classes.subtitle}>
      {props.subtitle}
    </div>
  )
}

export default Subtitle;
