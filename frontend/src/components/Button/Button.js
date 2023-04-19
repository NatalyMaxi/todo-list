import React from 'react';
import classes from './Button.module.css';

const Button = ({ text, disabled, onClick }) => {
   return (
      <button
         className={disabled ?
            `${classes.button} ${classes.button_disabled}`
            :
            `${classes.button}`}
         onClick={onClick}
      >
         {text}
      </button>
   )
}

export default Button;