import React from 'react';
import classes from './Select.module.css';

const Select = ({ value, onChange, children, name }) => {
   return (
      <select
         className={classes.select}
         value={value}
         onChange={onChange}
         name={name}
      >
         {children}
      </select>
   )
}

export default Select;