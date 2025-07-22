import React from "react";
import { Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Realisations from "./pages/Realisations";
import mentionslegals from "./pages/mentionslegal";


export default function App() {
  return(
    <div className="App">
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/Services">Services</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Realisations">Réalisations</Link>
          <Link to="/mentionslegal">mentions</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/Services" element={<Services/>} ></Route>
          <Route path="/Contact" element={<Contact/>} ></Route>
          <Route path="/Realisations" element={<Realisations/>} ></Route>
            <Route path="/mentionslegal" element={<mentionslegals/>} ></Route>
        </Routes>
    </div>
  );
};