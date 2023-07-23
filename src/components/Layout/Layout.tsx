import React, { FC } from 'react';
import styles from './Layout.module.scss';
import {Header} from "../Header";
import {Outlet} from 'react-router-dom'
import {Sidebar} from "../Sidebar";

interface OutletProps {}

export const Layout: FC<OutletProps> = () => (
  <div className={styles.Outlet}>
    <Header/>
    <Sidebar/>
    <Outlet/>
  </div>
);

