import React from "react";
import { Routes, Route, Link} from "react-router-dom";

import NavBar from "./components/Navbar/NavBar";
import Contact from "./pages/Contact";

    export default function App() {
  return(
    <div>
      <h1>Hello World</h1>
      <NavBar/>
      <Contact/>

    </div>
  );
};

