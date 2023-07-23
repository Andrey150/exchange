import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";
import { Modal } from '../Modal'
import question from '../../assets/img/question.svg'
import styles from './Header.module.scss';


interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {

  const [ isActive, setIsActive ] = useState(false)

  return (
    <header className={styles.Header}>
      <Link to='/' className={styles.link}>Exchange</Link>
      <span onClick={() => setIsActive(true)} className={styles.question}>
        <img src={question} alt="question" className={styles.img}/>
      </span>
      {isActive &&
      <div className={styles.modalArea}>
        <div className={styles.close} onClick={() => setIsActive(false)}>X</div>
        <Modal>
          <p>Для корректной работы приложения потребуется включенный впн, т.к без него запросы, которые отправляются на сервер блокируются.</p>
          <p>Если допустимое число запросов к серверу будет исчерпано, то необходимао получить собственный ключ на сайте <a href="https://apilayer.com/marketplace/exchangerates_data-api">apilayer.com/ </a>
           и заменить его в проекте в файле ./src/api</p>
          <p>Так же потребуется залогиниться на сайте <a href="https://apilayer.com/marketplace/exchangerates_data-api">apilayer.com/</a></p>
        </Modal>
      </div>
      }
    </header>
  )
};
