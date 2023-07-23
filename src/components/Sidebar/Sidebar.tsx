import React, { FC } from 'react';
import {Link} from "react-router-dom";

import styles from './Sidebar.module.scss';


interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = () => (
  <nav className={styles.Sidebar}>
    <Link to='/' className={styles.link}>Базовая валюта</Link>
    <Link to='/converter' className={styles.link}>Конвертация валюты</Link>
    <Link to='/courses' className={styles.link}>Курсы валют</Link>
  </nav>
);

