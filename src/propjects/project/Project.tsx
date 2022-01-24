import React from 'react';
import styles from './Project.module.css'

const Project = () => {
    return (
        <div className={styles.project}>
            <div className={styles.picture}>
                <div className={styles.btn}>
                    <a href={'#'}>Смотреть</a>
                </div>
            </div>
            <div className={styles.title}>Название проекта</div>
            <div className={styles.description}>Краткое описание</div>
        </div>
    );
};

export default Project;