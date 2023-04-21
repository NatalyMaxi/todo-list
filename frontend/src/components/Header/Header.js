import React from 'react';
import classes from './Header.module.css';
import Logo from '../Logo/Logo';
import ExitButton from '../ExitButton/ExitButton';

const Header = ({ onSignOut }) => {
  return (
    <section className={classes.header}>
      <Logo />
      <ExitButton onClick={onSignOut} />
    </section>
  )
}

export default Header;
