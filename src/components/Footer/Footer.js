"use client"

import styles from "./Footer.module.css";
import React, { useContext } from 'react';
import { ThemeContext } from "@/context/Theme";

export default function Footer() {
    const context = useContext(ThemeContext);
    const { theme, toggleTheme } = context;
    return (
        <div className={theme ? styles.dark : styles.light}>
            <footer className={styles.footer}>
                <p>Website programmed and designed by Rachel Ruddy using Next.Js.</p>
            </footer>
        </div>
    );
}