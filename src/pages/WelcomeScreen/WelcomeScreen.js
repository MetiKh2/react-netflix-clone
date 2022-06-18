import React, { useState } from 'react'
import { SignUpForm, WelcomeForm } from '../../components'
import {EnterToSiteLayout} from '../index'
import styles from './WelcomeScreen.module.css'
const WelcomeScreen = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  return (
    <EnterToSiteLayout>
      {isSignUp&&<SignUpForm/>}
    {!isSignUp&&<WelcomeForm setIsSignUp={setIsSignUp}/>}
    </EnterToSiteLayout>
  )
}

export default WelcomeScreen