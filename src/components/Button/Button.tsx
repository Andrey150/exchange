import React, { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: any,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: FC<ButtonProps> = ({children, onClick}) => (
  <button className={styles.Button} onClick={onClick}>
    {children}
  </button>
);

