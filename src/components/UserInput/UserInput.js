'use client'
import React, {useState} from 'react';
import styles from "./UserInput.module.css";
// import sgMail from '@sendgrid/mail';
// import { useRouter } from "next/navigation";


export default function UserInput({ id, label }) { 
    return (
        <p className={styles.input}>
            <label htmlFor={id}>{label}</label>
            <input className={styles.txtbox} id={id} name={id}/>
        </p>
    )
}