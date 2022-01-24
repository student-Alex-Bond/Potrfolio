import React from 'react';
import styles from './Projects.module.css'
import containerStyle from '../common/styles/Container.module.css'
import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${containerStyle.container} ${styles.projectsContainer}`}>
                <h2>Мои работы</h2>
                <div className={styles.projects}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
};

export default Projects;