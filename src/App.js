import React from "react";
import Nav from "./components/Nav"
import Home from './sections/Home'
import About from "./sections/About/About"
import Project from "./sections/Project/Project"
import Contact from "./sections/Contact"
import { NavProvider } from './context/NavContext';

function App() {
  return (
    <NavProvider>
      <Nav />
      <Home />
      <About />
      <Project />
      <Contact />
    </NavProvider>

  )
}

export default App
