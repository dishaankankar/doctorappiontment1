import React from "react";
import './App.css';
import Navbar from "./components/inc/Navbar";
import About from "./components/pages/About";
import Contactus from "./components/pages/Contact";
import Home from "./components/pages/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Footer from './components/inc/Footer';
import SignUp from "./components/pages/Signup";
import Login from "./components/pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home/>}/>


          <Route  path="/about" element={<About/>}/>

          <Route  path="/contact" element={<Contactus/>}/>
          <Route  path="/Signup" element={<SignUp/>}/>
          <Route  path="/login" element={<Login/>}/>

        </Routes>
        <Footer/>
    
         
      </div>
    </Router>
  );
}

export default App;
