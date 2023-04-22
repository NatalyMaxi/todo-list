import React from "react";
import classes from './Textarea.module.css';

const Textarea = ({ error, name, placeholder, type, onChange, value, ...rest }) => {

  return (
    <>
      <textarea className={error
        ? `${classes.textarea} ${classes.textarea_type_error}` : `${classes.textarea}`}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
        {...rest}
      />
      {
        error && <span className={classes.textarea__error}>{error}</span>
      }

    </>
  )
}

export default Textarea;
