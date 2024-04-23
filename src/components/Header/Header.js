'use client'

import Link from 'next/link';
import styles from "./Header.module.css";
import React, { useContext } from 'react';
import { ThemeContext } from "@/context/Theme";

export default function Header() {
    const context = useContext(ThemeContext);
    const { theme, toggleTheme } = context;
    return(
        <div className={theme ? styles.dark : styles.light}>
            <header className={styles.header}>
                <h1>Rachel Ruddy{"\n"}</h1>
                <nav className={styles.nav}>
                    <Link className={styles.navLink} href="/">HOME</Link>
                    <Link className={styles.navLink} href="/portfolio">PORTFOLIO</Link>
                    <Link className={styles.navLink} href="/contact">CONTACT ME</Link>
                </nav>
                <div className={styles.toggle}>
                    <label forhtml="switch">Toggle Dark Mode: </label>
                    <input type="checkbox" id="switch" onClick={toggleTheme}/>
                </div>
            </header>
        </div>
    );
}