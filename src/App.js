import React from "react";
import { Routes, Route, Link} from "react-router-dom";
import NavBar from "./components/Navbar/NavBar.jsx";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Mentions from "./pages/Mentions";
import bootstrap from 'bootstrap'
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Footer from "./components/Footer/Footer";



    export default function App() {
  return(
    <div>
       <NavBar/>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/Portfolio" element={<Portfolio/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Mentions" element={<Mentions/>}></Route>
      </Routes>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
    

  );
};

