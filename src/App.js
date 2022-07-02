import Header from "./components/Header";
import Baner from "./components/Baner";
import Rows from "./components/Rows";
import SignIn from "./components/SignIn";
import { Routes, Route } from "react-router-dom"

import "./components/banerCarts.scss"
import "./main.scss"
function App() {
  
  return <div className="App">
       
  <Header/>
  <Baner/>
    <Rows />
    
        <Routes>
        <Route path="signIn" element={ <SignIn />}/>        
        </Routes>
    </div>
    ;
}

export default App;
