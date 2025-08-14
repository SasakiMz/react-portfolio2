import React from "react";
import {Link} from "react-router";
import Home from '../../pages/Home';
import Services from '../../pages/Services';
import Contact from '../../pages/Contact';
import Mentions from '../../pages/Mentions';
import Portfolio from '../../pages/Portfolio';




const NavBar = () => {
    return (
   
<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">John Doe</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav nav-underline">
          <Link to="" class="nav-link" href="#">Home</Link>
          <Link to="/Services" class="nav-link" href="#">Services</Link>
          <Link to="/Portfolio" class="nav-link" href="#">Portfolio</Link>
          <Link to="/Contact" class="nav-link" href="#">Contact</Link>
          <Link to="Mentions" class="nav-link" href="#">Mentions Légales</Link>
        </div>
      </div>
  </div>
</nav>
    )
}

export default NavBar;