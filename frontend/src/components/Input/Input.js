import React from 'react';
import classes from './Input.module.css';

const Input = ({ error, name, placeholder, type, onChange, value, ...rest }) => {
   return (
      <div>
         <input
            className={error ?
               `${classes.input} ${classes.input_type_error}`
               :
               `${classes.input}`}
            name={name}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            value={value}
            {...rest}
         />
         {
            error && <span className={classes.input__error}>{error}</span>
         }
      </div>
   )
}

export default Input;