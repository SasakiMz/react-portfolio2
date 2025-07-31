import React from "react";
import { Routes, Route, Link} from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Mentions from "./pages/Mentions";
import bootstrap from 'bootstrap'
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";


    export default function App() {
  return(
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">John Doe</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="" class="nav-link active" aria-current="page" >Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/Services" class="nav-link" >Services</Link>
            </li>
            <li class="nav-item">
              <Link to="/Portfolio" class="nav-link" >Portfolio</Link>
            </li>
            <li class="nav-item">
              <Link to="/Contact" class="nav-link" >Contact</Link>
            </li>
            <li class="nav-item">
              <Link to="/Mentions" class="nav-link" >Mentions Légales</Link>
            </li>
          </ul>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Services" element={<Services/>}></Route>
            <Route path="/Portfolio" element={<Portfolio/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Mentions" element={<Mentions/>}></Route>
          </Routes>
        </div>
      </div>
    </nav>
    </div>
  );
};

