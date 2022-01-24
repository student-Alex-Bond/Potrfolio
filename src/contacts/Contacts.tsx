import React from 'react';
import styles from './Contacts.module.css'
import containerStyle from '../common/styles/Container.module.css'

const Contacts = () => {
    return (
        <div className={`${containerStyle.container} ${styles.contactsBlock}`}>
            <h2>Контакты</h2>
            <form className={styles.form}>
                <input type="text"/>
                <input type="text"/>
                <textarea/>
            </form>
            <div>
                <input className={styles.btn} type={"submit"}/>
            </div>
        </div>
    );
};

export default Contacts;