import React from 'react'
import { Header } from './Header'
import {Link} from "react-router-dom"
import "./signIn.scss"
import Logo from "../images/pngegg.png"

function SignIn() {
  return (
    <div className='mainSignIn'>
      <Header/>
        <div className='SignInContainer'>
          <div className='signIn'>
          <Link className='signInImg' to="/">
          <img src={Logo} alt="" />
          </Link>
          <div className="signInBox">
            <h2>Sign-In</h2>
            <strong>Email or mobile phone number</strong>
            <form >
              <input type="text" name="text" />
              <button>Continue</button>
            </form>
            <p>By continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice.</span></p>
            <b>Need Help?</b>
          </div>
          
          </div>
        </div>
     </div>
  )
}

export default SignIn