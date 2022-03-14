import React from "react";
import Nav from "./sections/Nav"
import Home from './sections/Home'
import About from "./sections/About"
import Project from "./sections/Project"
import Contact from "./sections/Contact"
import { NavProvider } from './context/NavContext';

function App() {
  return (
    <NavProvider>
      <Nav />
      <Home />
      <About />
      {/* <Project /> */}
      <Contact />
    </NavProvider>

  )
}

export default App
