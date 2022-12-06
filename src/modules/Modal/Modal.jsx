import React, { useEffect, useMemo } from 'react';

import styles from './Modal.module.scss';

import { createPortal } from 'react-dom';

const modalRootElement = document.querySelector('#modal');

const Modal = (props) => {
  const { open, onClose } = props;

  const element = useMemo(() => {
    return document.createElement('div');
  }, []);

  useEffect(() => {
    if (open) {
      modalRootElement.appendChild(element);

      return () => {
        modalRootElement.removeChild(element);
      };
    }

  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  if (open) {
    return createPortal(
      <div className={styles.modalContainer} onClick={onClose}>
        <div className={styles.container} onClick={e => e.stopPropagation()}>
          {props.children}
        </div>
      </div>, element);
  }

  return null;

};

export default Modal;