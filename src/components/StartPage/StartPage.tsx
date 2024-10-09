import React, {FC, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IRootReducer} from "../../types/types";
import { setSelectedCurrency } from '../../actions';
import {Button} from "../Button";

import styles from './StartPage.module.scss';


interface StartPageProps {
  currencyList: Array<[string, string]> | null;
  setCurrencyList: (data: Array<[string, string]> | null) => void;
}

export const StartPage: FC<StartPageProps> = ({currencyList, setCurrencyList}) => {
  const [inputValue, setInputValue] = useState('');

  const currentCurrency = useSelector((state:IRootReducer) => state.currency.selectedCurrency);
  const dispatch = useDispatch();

  const handleButtonClick = (currencyCode: string) => {
    localStorage.setItem("baseCurrency", currencyCode);
    dispatch(setSelectedCurrency(currencyCode));
  };

  if (currencyList === null) {
    return <div>Loading...</div>;
  }

  const filteredCurrencyList = currencyList.filter(([currencyCode, currencyName]) =>
    currencyCode.toLowerCase().includes(inputValue.toLowerCase()) || currencyName.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className={styles.startPage}>
      <h2 className={styles.title}>Ваша базовая валюта это-&nbsp;
      <span className={styles.currency}>{ currentCurrency}</span>.
        Можете изменить её на другую</h2>
      <h4>Строка поиска валюты</h4>
      <input type="text" className={styles.input} onChange={(e) => setInputValue(e.target.value)} />
      <ul className={styles.list}>
        {inputValue.length > 0
          ? filteredCurrencyList.map(([currencyCode, currencyName]) => (
            <li key={currencyCode} className={styles.listItem}>
              <Button
                onClick={() => handleButtonClick(currencyCode)}
                children={`${currencyCode} : ${currencyName}`}
              />
            </li>
          ))
          : currencyList.map(([currencyCode, currencyName]) => (
            <li key={currencyCode} className={styles.listItem}>
              <Button onClick={() => handleButtonClick(currencyCode)} children={`${currencyCode} : ${currencyName}`}/>
            </li>
          ))}
      </ul>
    </div>
  );
};
