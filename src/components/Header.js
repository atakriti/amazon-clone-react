import React from 'react'
import "./header.scss"
import logo from "../images/logo.png"
import { GoLocation } from "react-icons/go"
import { BsSearch } from "react-icons/bs"
import {FiShoppingCart} from "react-icons/fi"
function Header() {
  return (
      <div className='header'>
          {/* logo */}
          <img src={logo} alt="Logo" />
          {/* location */}
          <div className="location">
              <GoLocation className='locationIcon'/>
              <span>
                  <small>Deliver to</small>
                  <b>Germany</b>
              </span>
          </div>
          {/* input */}
          <form >
              <input type="search" />
              <span><BsSearch className='searchIcon'/></span>
          </form>
          {/* right section */}
         <div className='rightSection'>
              {/* sign in */}
              <div>
                  <small>Hello, Sign in</small>
                  <b>Account & Lists</b>
              </div>
              {/* orders */}
              <div>
                  <small>Returns</small>
                  <b>& Orders</b>
              </div>
              {/* cart */}
              <div>
                  <FiShoppingCart className='cartIcon'/>
                  <b>Cart</b>
              </div>
         </div>
      </div>
  )
}

export default Header