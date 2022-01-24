import React from 'react';
import styles from './App.module.css'
import './App.module.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./propjects/Projects";
import Hiring from "./hiring/Hiring";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className={styles.mainContainer}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Hiring/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
