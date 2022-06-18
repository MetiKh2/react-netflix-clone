import React, { useState } from "react";
import styles from "./SignUpForm.module.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function register() {
    if (email && password) {
      console.log("errrrr");
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate("/", { replace: true });
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }
  function signIn(e) {
    e.preventDefault();
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigate("/", { replace: true });
        })
        .catch((error) => {
          alert(error.code.split('/')[1]);
        });
    }
  }
  return (
    <div className={styles.container}>
      <form onSubmit={signIn}>
        <h1 className={styles.title}>Sign In</h1>
        <div className={styles.inputContainer}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.signInInput}
            type={"email"}
            placeholder="Email"
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.signInInput}
            type={"password"}
            placeholder="Password"
          />
        </div>
        <button className={styles.btn}>Sign in</button>
        <div className={styles.navigate}>
          <span>New to Netflix</span>
          <span style={{ color: "#fff" }} onClick={register}>
            Sign up now
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
