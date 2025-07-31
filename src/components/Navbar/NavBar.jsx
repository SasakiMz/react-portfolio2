import React from "react";
import { Routes, Route, Link} from "react-router";
import Home from '../../pages/Home';
import Services from '../../pages/Services';
import Contact from '../../pages/Contact';
import Mentions from '../../pages/Mentions';
import Portfolio from '../../pages/Portfolio';



const NavBar = () => {
    return (
        <div className='navbar'>
        <nav>
          <Link to="">Accueil</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Services">Services</Link>
          <Link to="/Portfolio">Réalisations</Link>
          <Link to="/Mentions">mentions</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/Services" element={<Services/>} ></Route>
          <Route path="/Contact" element={<Contact/>} ></Route>
          <Route path="/Portfolio" element={<Portfolio/>} ></Route>
          <Route path="/Mentions" element={<Mentions/>}></Route>
        </Routes>
        </div>
    )
}

export default NavBar