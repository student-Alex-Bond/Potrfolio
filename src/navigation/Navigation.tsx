import React from 'react';
import styles from './Navigation.module.css'


const Navigation = () => {
    return (
        <div className={styles.nav}>
            <a href="">Главная</a>
            <a href="">Скиллы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    );
};

export default Navigation;