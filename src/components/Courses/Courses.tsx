import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {IRootReducer} from "../../types/types";
import {Button} from "../Button";
import {getLatestCourse, getTimeSeries} from '../../api/api'
import { Modal } from 'components/Modal';
import {Chart} from "../Chart";
import {formatDate} from '../../utils/getDate'
import {setDateDays, setAmounts} from '../../actions'
import styles from './Courses.module.scss';


interface CoursesProps {
  currencyList: Array<[string, string]> | null;
}

export const Courses: FC<CoursesProps> = ({currencyList}) => {

  const [inputValue, setInputValue] = useState('');
  const [ isActive, setIsActive ] = useState(false);
  const [ currencyCodeWithValue , setCurrencyCodeWithValue ] = useState<Array<[string, string]> | null>(null);

  const dispatch = useDispatch();

  const currentCurrency = useSelector((state: IRootReducer) => state.currency.selectedCurrency);
  const currentDate = new Date();

  const today = formatDate(currentDate)
  const weekAgo = formatDate(getSevenDaysAgo())

  const handleButtonClick = ( startDate:string, endDate:string, symbols:string, currentCurrency:string ) => {
    setIsActive(true)
    getTimeSeries(startDate, endDate, symbols, currentCurrency)
      .then((data: object) => {

        const datesArray: string[] = [];
        const amountsArray: string[] = [];

        Object.entries(data).forEach(([date, currencyData]) => {

          datesArray.push(date.split('-')[2]);
          const currencyValue = currencyData[symbols];
          amountsArray.push(currencyValue.toString());
        });

        dispatch(setDateDays(datesArray));
        dispatch(setAmounts(amountsArray));

        return Object.entries(data)
    })
      .catch((error) => {
        console.error('Error fetching currency:', error);
      });
  };

  function getSevenDaysAgo() {

    const currentDateInMillis = Date.now();
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const sevenDaysAgoInMillis = currentDateInMillis - 7 * millisecondsPerDay;
    const sevenDaysAgoDate = new Date(sevenDaysAgoInMillis);

    return sevenDaysAgoDate;
  }

  useEffect(() => {
    if (currencyList) {
      const allCurrencyCodes = currencyList.map(([currencyCode, _]) => currencyCode);

      getLatestCourse(allCurrencyCodes, currentCurrency)
        .then(data => {
          if (data) {
            setCurrencyCodeWithValue(Object.entries(data.rates));
          } else {
            console.log("Ошибка получения данных о валюте");
          }
        })
        .catch(error => {
          console.error("Произошла ошибка при запросе данных о валюте:", error);
        });
    }
  }, [currentCurrency, currencyList]);

  if (currencyList === null) {
    return <div>Loading...</div>;
  }

  if (currencyCodeWithValue === null) {
    return <div>Loading...</div>;
  }

  const filteredCurrencyList = currencyCodeWithValue.filter(([currencyCode]) =>
    currencyCode.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className={styles.Courses}>
      <h2>Выберете валюту, чтобы посмотреть изменения курса по отношению к базовой валюте.</h2>
      <h2>Текущая базовая валюта это <span className={styles.currency}>{currentCurrency}</span></h2>
      <h4>Строка поиска валюты</h4>
      <input type="text" className={styles.input} onChange={(e) => setInputValue(e.target.value)} />
      <ul className={styles.list}>
        {inputValue.length > 0
          ? filteredCurrencyList.map(([currencyCode, currencyName]) => (
            <li key={currencyCode} className={styles.listItem}>
              <Button onClick={() => handleButtonClick(weekAgo, today, currencyCode, currentCurrency)} children={`${currencyCode} : ${currencyName}`}/>
            </li>
          ))
          :
          currencyCodeWithValue.map(([currencyCode, currencyValue]) => (
            <li className={styles.listItem} key={currencyCode}>
              <Button onClick={() => handleButtonClick(weekAgo, today, currencyCode, currentCurrency)} children={`${currencyCode} : ${currencyValue}`}/>
            </li>
          ))
        }
      </ul>
      {isActive &&
        <div className={styles.modalArea}>
          <div className={styles.close} onClick={() => setIsActive(false)}>X</div>
          <Modal>
            <h3>Change</h3>
            <Chart />
          </Modal>
        </div>
      }

    </div>
  )
};

