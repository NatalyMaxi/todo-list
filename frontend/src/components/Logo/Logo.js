import React from 'react';
import classes from './Logo.module.css';
import logo from '../../images/logo.png';

const Logo = () => {
   return (
      <div className={classes.logo}>
         <img
            className={classes.logo__image}
            src={logo}
            alt='Логотип'
         />
      </div>
   )
}

export default Logo;