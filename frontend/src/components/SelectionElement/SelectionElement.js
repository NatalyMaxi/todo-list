import React from 'react';
import classes from './SelectionElement.module.css';

const SelectionElement = ({ value, selectionText, disabled, ...rest }) => {
   return (
      <option
         className={disabled ? `${classes.option} ${classes.option_disabled}` : `${classes.option}`}
         value={value}
         {...rest}
      >
         {selectionText}
      </option>
   )
}

export default SelectionElement;