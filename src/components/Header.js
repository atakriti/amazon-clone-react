import React from 'react'
import { Link } from "react-router-dom"

import "./header.scss"
import logo from "../images/logo.png"
import { GoLocation } from "react-icons/go"
import { BsSearch } from "react-icons/bs"
import { FiShoppingCart } from "react-icons/fi"
export let Zero = 0

export function Header() {
    
  return (
      <div className='header'>
          {/* logo */}
          <Link className='logoLink' to ="/">
              <img src={logo} alt="Logo" />
              </Link>
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
              <Link className='signInLink' to="/signIn">
              <div>
                  <small>Hello, Sign in</small>
                  <b>Account & Lists</b>
              </div>
              </Link>
              {/* orders */}
              <Link className='signInLink' to="/signIn">
              <div>
                  <small>Returns</small>
                  <b>& Orders</b>
              </div>
              </Link>
              {/* cart */}
              <div>
                  <FiShoppingCart className='cartIcon'/>
                  <b>Cart</b>
                  <b className='zero'>{ Zero}</b>
              </div>
         </div>
      </div>
  )
}

// export default Header