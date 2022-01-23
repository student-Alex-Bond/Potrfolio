import React from 'react';
import styles from './Main.module.css'
import containerStyle from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={`${containerStyle.container} ${styles.mainContainer}`}>
                <div className={styles.text}>
                    <span>Всем привет!</span>
                    <h1>Меня зовут Александр Бондаренко </h1>
                    <p>Я Front-End Developer</p>
                </div>
                <div className={styles.photo}>а</div>
            </div>
        </div>
    );
};

export default Main;