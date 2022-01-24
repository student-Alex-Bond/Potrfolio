import React from 'react';
import styles from './Footer.module.css'
import containerStyle from '../common/styles/Container.module.css'

const Footer = () => {

    const currentYear =  new Date().toLocaleDateString().slice(6,10)

    return (
        <div className={`${containerStyle.container} ${styles.footer}`}>
            <h2>Александр Бондаренко</h2>
            <div className={styles.social}>
                <div className={styles.socialIcon}>i</div>
                <div className={styles.socialIcon}>i</div>
                <div className={styles.socialIcon}>i</div>
                <div className={styles.socialIcon}>i</div>
            </div>
            <div>&copy; {currentYear} Все права защищены</div>
        </div>
    );
}


export default Footer;