import React from "react";
import {  SignUpForm } from "../../components";
import {EnterToSiteLayout} from '../index'
import styles from "./SignUpScreen.module.css";
const SignUpScreen = () => {
  return (
    <EnterToSiteLayout>
      <SignUpForm/>
    </EnterToSiteLayout>
    );
};

export default SignUpScreen;
