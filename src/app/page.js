"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useContext } from 'react';
import { ThemeContext } from "@/context/Theme";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? styles.dark : styles.light}>
      <main className={styles.main}>
        <h2>About Me</h2>
        <div>
          <div className={styles.greeting}>
            <Image src="/my_face_round.png" width={250} height={250} alt="An image of my face."/>
            <div className={styles.greetingText}>
              <h3>Hello!</h3>
              <p>Welcome to my website. My name is Rachel Ruddy, and I'm a fourth year computer science student at 
                Northwestern University. Continue on this page to read more about me as a person, or head over to the 
                Portfolio page to learn more about some of the projects I've worked on.</p>
            </div>
          </div>
          <hr></hr>
          <div className={styles.contentBox}>
            <h3>My techological background</h3>
            <p>I've studied computer science through the College of Arts and Sciences, which has allowed me to 
              develop skills in communcation alongside my more technical studies. Some of my noteworthy classes include 
              <b> Scalable Software Architectures</b>, <b>Database Systems</b>, and <b>Full Stack Development.</b></p>
          </div>
          <a href="/Resume.pdf" download>
            <button>Download my resume (pdf)</button>
          </a>
          <div className={styles.contentBox}>
            <h3>Beyond technology</h3>
            <p>When I'm not busy coding, I like to spend my time pursuing art. On summer weekends you'll find me working 
              at the Bristol Renaissance Faire, and in the rest of my free time I can be found playing video games, sketching,
              or journaling. 
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
