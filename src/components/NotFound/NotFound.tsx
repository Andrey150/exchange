import React, { FC } from 'react';
import styles from './NotFound.module.scss';
import {Link} from "react-router-dom";

interface NotFoundProps {}

export const NotFound: FC<NotFoundProps> = () => (
  <div className={styles.NotFound}>
    <h1>This page not found</h1>
    <Link to='/'>Go to start page</Link>
  </div>
);
