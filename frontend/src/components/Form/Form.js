import React from 'react';
import ButtonSubmit from '../ButtonSubmit/ButtonSubmit';
import classes from './Form.module.css';

const Form = ({ children, text, name, onSubmit, disabled }) => {
   return (
      <form
         className={classes.form}
         name={name}
         onSubmit={onSubmit}
      >
         <div className={classes.form__container}>
            {children}
         </div>
         <div className={classes.form__wrapper}>
            <ButtonSubmit
               type='submit'
               text={text}
               disabled={disabled}
            />
         </div>
      </form>
   )
}

export default Form;