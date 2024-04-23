"use client"

import styles from "./page.module.css";
import ContactUs from "/src/components/Contact/Contact.js";
import { useContext } from 'react';
import { ThemeContext } from "@/context/Theme";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? styles.dark : styles.light}>
      <main className={styles.main}>
        <ContactUs/>
      </main>
    </div>
  ); }
