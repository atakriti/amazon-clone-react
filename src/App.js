import {Header} from "./components/Header";
import Baner from "./components/Baner";
import Rows from "./components/Rows";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./components/banerCarts.scss"
import "./main.scss"
import Footer from "./components/Footer";





function App() {
  
  return  <div className="App">
      {/* Route SignIn */}
    <Routes>
        <Route path="/signIn" element={<SignIn />}/>
      </Routes>
      
      {/* Route Header */}

      <Header />
      <Baner />
      <Rows/>
      <Footer/>



     
  </div>;
  
}

export default App;
