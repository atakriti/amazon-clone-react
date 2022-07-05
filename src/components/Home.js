import React from 'react'
import {Header} from "./Header";
import Baner from "./Baner";
import Rows from "./Rows";
import { useState } from "react";
import "./banerCarts.scss"
import "../main.scss"
import Footer from "./Footer";
function Home() {

    let [number, setNumber] = useState(0)
    let handleIncrement = () => {
      setNumber(number + 1)
    }
  return (
      <div>
        
      <Header zero={ number}/>
      <Baner />
      <Rows handleCount={handleIncrement} />
      <Footer/>
    </div>
  )
}

export default Home