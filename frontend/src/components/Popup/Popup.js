import React, { useEffect } from 'react';
import classes from './Popup.module.css';
import { escKeyCode } from '../../utils/constants';

const Popup = ({ isOpen, onClose, children }) => {
  const popupIsActive = isOpen ? `${classes.popup_active}` : '';

  const handleEscClose = (evt) => {
    evt.key === escKeyCode && onClose();
  }

  const handleOverlayClose = (evt) => {
    const evtTarget = evt.target;
    if (evtTarget.classList.contains(`${classes.popup}`)) {
      onClose();
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleEscClose);
    window.addEventListener('click', handleOverlayClose);
    return () => {
      window.removeEventListener('click', handleOverlayClose);
      window.removeEventListener('keydown', handleEscClose);
    };
       // eslint-disable-next-line
  }, []);

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
