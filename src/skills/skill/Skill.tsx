import React from 'react';
import styles from './Skill.module.css'

type SkillProps ={
    title: string
    description: string
}

const Skill = (props: SkillProps) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>а</div>
            <h3>{props.title}</h3>
            <span className={styles.description}>Описание: {props.description}</span>
        </div>
    );
};

export default Skill;