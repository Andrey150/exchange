import React, {FC, useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom'
import {StartPage} from "../StartPage";
import {Courses} from "../Courses";
import {allCurrency} from "../../api/api";

import styles from './CurrencyListProvider.module.scss';


interface CurrencyListProviderProps {}

export const CurrencyListProvider: FC<CurrencyListProviderProps> = () => {

  const [currencyList, setCurrencyList] = useState<Array<[string, string]> | null>(null);

  const currentPath = useLocation().pathname

  useEffect(() => {
    allCurrency().then(data => {
      setCurrencyList(data);
    });
  }, []);

  return (
    <div className={styles.CurrencyList}>
      {currencyList === null ? (
        <div>Loading...</div>
      ) : (
        <> {currentPath === "/courses" ?
          <Courses currencyList={currencyList}/>
          :
          <StartPage currencyList={currencyList} setCurrencyList={setCurrencyList}/>}
        </>
      )}
    </div>
  )
};

