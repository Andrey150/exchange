import React, {FC, useState} from 'react';
import styles from './CurrencyConverter.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {IRootReducer} from "../../types/types";
import {Button} from "../Button";
import {convertCurrency} from '../../api/api'

interface CurrencyConverterProps {}

export const CurrencyConverter: FC<CurrencyConverterProps> = () => {

  const [inputValue, setInputValue ] = useState('');
  const [ currentDate, setCurrentDate ] = useState('');
  const [ result, setResult ] = useState(null);


  const HandleButton = (inputValue:string) => {
    const inputArr = inputValue.split(" ");
    const fromCurrency = inputArr[1].toUpperCase();
    const toCurrency = inputArr[inputArr.length -1].toUpperCase();
    const amount = inputArr[0];
    convertCurrency(toCurrency, fromCurrency, amount)
      .then(data => {
        setCurrentDate(data.date)
        setResult(data.result)
      })
  }

  return (
    <div className={styles.CurrencyConverter}>
      <div className={styles.convertWrap}>
        <h2>Конвертировать валюту</h2>
        <h4>Для конвертации валюты введите текст в формате "15 USD in RUB"</h4>
        <input
          type="text"
          className={styles.input}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='15 USD in RUB'
        />
        <Button children={"Convert"} onClick={() => HandleButton(inputValue)}/>
        <div className={styles.block}>
          <h2>{currentDate}</h2>
          <h2>{result}</h2>
        </div>
      </div>
    </div>
  )
};

