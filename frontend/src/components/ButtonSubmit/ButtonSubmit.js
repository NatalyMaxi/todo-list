import React from 'react';
import classes from './ButtonSubmit.module.css';

const ButtonSubmit = ({ text, disabled, ...rest }) => {
   return (
      <button
         className={disabled ?
            `${classes.button} ${classes.button_disabled}`
            :
            `${classes.button}`}
         {...rest}>
         {text}
      </button>
   )
}

export default ButtonSubmit;