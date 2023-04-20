import React from 'react';
import classes from './Button.module.css';

const Button = ({ text, onClick, role }) => {

   return (
      <button
         className={role ?
            `${classes.button}`
            :
            `${classes.button} ${classes.button_disabled}`}
         onClick={onClick}
         disabled={role ? false : true}
      >
         {text}
      </button>
   )
}

export default Button;