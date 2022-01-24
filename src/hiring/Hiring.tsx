import React from 'react';
import styles from './Hiring.module.css'
import containerStyle from '../common/styles/Container.module.css'
const Hiring = () => {
    return (
        <div className={`${containerStyle.container} ${styles.hiringBlock}`}>
            <h2>Рассматриваю варианты удаленной работы</h2>
            <div className={styles.btn}>
                <a href="#">Нанять меня</a>
            </div>
        </div>
    );
};

export default Hiring;