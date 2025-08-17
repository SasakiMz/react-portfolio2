import React from "react";
import {Link} from "react-router";





const NavBar = () => {
    return (
<header>   
  <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="">John Doe</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav nav-underline">
            <Link to="" className="nav-link" href="#">Home</Link>
            <Link to="/Services" className="nav-link" href="#">Services</Link>
            <Link to="/Portfolio" className="nav-link" href="#">Portfolio</Link>
            <Link to="/Contact" className="nav-link" href="#">Contact</Link>
            <Link to="Mentions" className="nav-link" href="#">Mentions Légales</Link>
          </div>
        </div>
    </div>
  </nav>
</header>
    )
}

export default NavBar;