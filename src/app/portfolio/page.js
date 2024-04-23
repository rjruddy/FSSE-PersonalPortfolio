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
        <h2>My Portfolio</h2>
        <h3>Development Projects</h3> {/*SSA Final, Game Dev Studio Final, 321 homepage*/}
        <div className={styles.grid}>
          <div className={styles.card}>
            {/*Image and description: SSA */}
            <Image className={styles.work} src="/ssaProj.png" width={235} height={250} alt="A screenshot of the client interface for the Scalable Software Architectures project"/>
            <p>This is my Scalable Software Architectures final project. In this project, I used AWS API Gateway, Lambda, and 
              RDS to create a backend data-management system with a python client.</p>
          </div>
          <div className={styles.card}>
            {/*Image and description: Game Dev */}
            <Image className={styles.work} src="/gdevTProj.png" width={235} height={250} alt="A screenshot of a game's starting screen with the title 'Oops, Too Small!'"/>
            <p>This is my Game Development Studio project. This project employed Unity and C# code to create a 
              2-dimensional multi-level platformer, complete with sound and win-lose conditions. <b><a href="https://github.com/rjruddy/OopsTooSmall">Check out my game repository here.</a></b></p>
          </div>
          <div className={styles.card}>
            {/*Image and description: 321 homepage */}
            <Image className={styles.work} src="/gmetProj.png" width={235} height={250} alt="A screenshot a website titled 'Rachel Ruddy's Page'"/>
            <p>This is the home page of my work from my Generative Methods course. This course introduced me a 
              variety of artistic uses for code using JavaScript, HTML, and Vue. Interested? <b><a href="https://rjruddy-a1.glitch.me">Check out my Generative Methods site here.</a></b></p>
          </div>
        </div>
        <div className={styles.contentBox}>
          <h3>Design Projects</h3> {/*HCI Figma*/}
          <div className={styles.card}>
            <Image className={styles.work} src="/hciProj.png" width={275} height={250} alt="A screenshot a website mockup for a course-management site named Caesar"/>
            <p>This is the final digital prototype for a redesign of Northwestern's course management site, Caesar. 
              The prototype was designed in Figma and has functional buttons for demonstrating user experience. <b><a href="https://www.figma.com/proto/BPNEoobWaSeshRmGsviurj/Untitled?type=design&node-id=2-1043&t=ybAwOfWrzVJ0DGOI-1&scaling=contain&page-id=0%3A1&starting-point-node-id=2%3A1043&mode=design">Check out my Caesar prototype here.</a></b> </p>
            {/*Image and description: HCI Figma */}
          </div>
        </div>
      </main>
    </div>
  );
}
