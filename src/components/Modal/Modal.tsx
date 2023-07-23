import React, {FC, ReactNode} from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  children: ReactNode
}

export const Modal = ({children}:ModalProps) => (
  <div className={styles.Modal} >
    {children}
  </div>
);

