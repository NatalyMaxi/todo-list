import React from 'react';
import classes from './Select.module.css';

const Select = ({ value, onChange, children }) => {
   return (
      <select
         className={classes.select}
         value={value}
         onChange={onChange}
      >
         {children}
      </select>
   )
}

export default Select;