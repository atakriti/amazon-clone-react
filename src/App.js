import {Header} from "./components/Header";
import Baner from "./components/Baner";
import Rows from "./components/Rows";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./components/banerCarts.scss"
import "./main.scss"
import Footer from "./components/Footer";





function App() {
  let [number, setNumber] = useState(0)
  let handleIncrement = () => {
    setNumber(number + 1)
  }


  
  return < Router >
    <div className="App">
      {/* Route SignIn */}
    <Routes>
    <Route path="/signIn" element={<SignIn />}/>
      </Routes>
      {/* Route Header */}

      <Header zero={ number}/>
      <Baner />
      <Rows handleCount={handleIncrement} />
      <Footer/>
     
     
  </div>
    </Router>
  
    ;
  
}

export default App;
