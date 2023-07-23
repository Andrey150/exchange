import React, { FC } from 'react';
import styles from './CountryWithCurrencyList.module.scss';

interface CountryWithCurrencyListProps {}

export const CountryWithCurrencyList: FC<CountryWithCurrencyListProps> = () => {
  return (
    <div className={styles.CountryWithCurrencyList} data-testid="CountryWithCurrencyList">
      CountryWithCurrencyList Component
    </div>
  )
};

