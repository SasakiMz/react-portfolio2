import React from "react";
import {Link} from "react-router";
import Home from '../../pages/Home';
import Services from '../../pages/Services';
import Contact from '../../pages/Contact';
import Mentions from '../../pages/Mentions';
import Portfolio from '../../pages/Portfolio';
import "../Navbar/navbar.css"



const NavBar = () => {
    return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div class="container-fluid">
        <a class="navbar-brand col-8" href="#">John Doe</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse col-4" id="navbarNavDropdown">
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
      </div>
    </nav>
    )
}

export default NavBar