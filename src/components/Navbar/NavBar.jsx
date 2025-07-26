import React from "react";
import { Routes, Route, Link} from "react-router-dom";
import Home from '../../pages/Home'
import Services from '../../pages/Services'
import Contact from '../../pages/Contact'
import Mentions from '../../pages/Mentions'
import Realisations from '../../pages/Realisations'



const NavBar = () => {
    return (
        <div className='navbar'>
        <nav>
          <Link to="">Accueil</Link>
          <Link to="">Contact</Link>
          <Link to="">Réalisations</Link>
          <Link to="">mentions</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="" element={<Services/>} ></Route>
          <Route path="" element={<Contact/>} ></Route>
          <Route path="" element={<Realisations/>} ></Route>
          <Route path="" element={<Mentions/>}></Route>
        </Routes>
        </div>
    )
}

export default NavBar