import SignIn from "./components/SignIn";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/amazon-clone-react" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
