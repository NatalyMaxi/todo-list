import React from 'react';
import classes from './ExitButton.module.css';

const ExitButton = ({ onClick }) => {
  return (
    <button
      className={classes.exitButton}
      type='button'
      onClick={onClick}
    >
    </button>
  )
}

export default ExitButton;
