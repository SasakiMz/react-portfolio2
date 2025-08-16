import React from "react";
import { Routes, Route, Link} from "react-router-dom";
import NavBar from './components/navbar/navbar.jsx';
import Contact from "./pages/contact.jsx";
import Home from "./pages/home.jsx";
import Mentions from "./pages/mentions.jsx";
import Portfolio from "./pages/portfolio.jsx";
import Services from "./pages/services.jsx";
import Footer from "./components/Footer/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";




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

