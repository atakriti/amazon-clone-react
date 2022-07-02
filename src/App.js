import Header from "./components/Header";
import Baner from "./components/Baner";
import Rows from "./components/Rows";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./components/banerCarts.scss"
import "./main.scss"
function App() {
  
  return  <div className="App">
    < Router >
      {/* Route SignIn */}
    <Routes>
    <Route path="/signIn" element={<SignIn />}/>
      </Routes>
      {/* Route Header */}
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      {/* Route Baner */}
        <Routes>
        <Route path="/" element={<Baner />} />
      </Routes>
      {/* Route Rows */}
      <Routes>
        <Route path="/" element={ <Rows/>}/>
        </Routes>
    </Router>
     
  </div>
  
    ;
}

export default App;
