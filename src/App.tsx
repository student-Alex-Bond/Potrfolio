import React from 'react';
import styles from './App.module.css'
import './App.module.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";

function App() {
    return (
        <div className={styles.mainContainer}>
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}

export default App;
