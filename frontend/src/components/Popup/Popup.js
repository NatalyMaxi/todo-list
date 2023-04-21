import React from 'react';
import classes from './Popup.module.css';

const Popup = ({ isOpen, onClose, children }) => {
  const popupIsActive = isOpen ? `${classes.popup_active}` : '';

  return (
    <div
      className={`${classes.popup} ${popupIsActive}`}
    >
      <div className={classes.popup__content}>
        <button
          className={classes.popup__close}
          type='button'
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  )
}

export default Popup;
