import React from 'react';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import classes from './Form.module.css';

const Form = ({ children, text, name, onSubmit, disabled, errorMessage }) => {
  return (
    <form
      className={classes.form}
      name={name}
      onSubmit={onSubmit}
      noValidate
    >
      <div className={classes.form__container}>
        {children}
      </div>
      <span
        className={classes.form__error}
      >{errorMessage}</span>
      <ButtonSubmit
        type='submit'
        text={text}
        disabled={disabled}
      />
    </form>
  )
}

export default Form;
