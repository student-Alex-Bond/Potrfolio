import React from 'react';
import styles from './Skills.module.css'
import containerStyle from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    const description = 'Lorem ipsum dolor sit amet, ' +
        'consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad' +
        ' minim veniam, quis nostrud exercitation ullamco laboris ' +
        'nisi ut aliquip ex ea commodo consequat. Duis aute irure ' +
        'dolor in reprehenderit in voluptate velit esse cillum dolore ' +
        'eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

    return (
        <div className={styles.skillsBlock}>
            <div className={`${containerStyle.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Мои навыки</h2>

                <div className={styles.skills}>
                   <Skill title={'Html'} description={description}/>
                   <Skill title={'CSS'} description={description}/>
                   <Skill title={'React'} description={description}/>
                </div>
            </div>

        </div>
    );
};

export default Skills;