import React from "react";
import styles from "./WelcomeForm.module.css";
import { Link } from "react-router-dom";
const WelcomeForm = ({setIsSignUp}) => {
  return (
    <div className={styles.container}>
      <h1>Unlimited films, TV programmes and more</h1>
      <p className={styles.firstText}>Watch anywhere, Cancel at any time</p>
      <p className={styles.secText}>Ready to watch? Enter email to create or restart your membership</p>
      <form>
      <div className={styles.inputContainer}>
        <input className={styles.welcomeInput} type={"email"} placeholder="Email" />
      <button onClick={()=>setIsSignUp(true)} className={styles.btn}>GET STARTED</button>
      </div>
    </form>
    </div>
  );
};

export default WelcomeForm;
