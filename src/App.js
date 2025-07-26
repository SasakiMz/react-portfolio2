import React from "react";
import { Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Realisations from "./pages/Realisations";
import Header from "./components/Header/Headercomp";
import NavBar from "./components/Navbar/NavBar";

    export default function App() {
  return(
    <div>
      <h1>Hello World</h1>
      <NavBar/>
      <Header/>
    </div>
  );
};

