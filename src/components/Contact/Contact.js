'use client'
import React, {useState} from 'react';
import styles from "./Contact.module.css";
import UserInput from "/src/components/UserInput/UserInput.js";
// import sgMail from '@sendgrid/mail';
// import { useRouter } from "next/navigation";


export default function ContactUs() {

  //success/failure states
  const [status, setStatus] = useState("");

  return (
      <section>
        <h2>Contact Me</h2>
        <p>Feel free to fill out this form or email me directly at <b><a href="mailto:rachelruddy2024@u.northwestern.edu">rachelruddy2024@u.northwestern.edu.</a></b></p>
        <form onSubmit={(e) => {
                e.preventDefault();
                setStatus("Submitted successfully!");
              }} className={styles.cform} method="post">
              <UserInput id="name" label="Full name: "/>
              <UserInput id="email" label="Your email: "/>
              <UserInput id="subject" label="Subject line: "/>
              <p className={styles.input}>
                <label htmlFor="message">Message: </label>
                <textarea className={styles.txtbox} id="message" type="text" name="message"/>
              </p>
              <button type="submit">Submit contact form</button>
          </form>
          <p className={styles.message}>
            { status }
          </p>
      </section>
    ); 
}