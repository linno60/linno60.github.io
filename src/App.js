import React from "react";
import Nav from "./sections/Nav"
import Home from './sections/Home'
import About from "./sections/About/About"
import Project from "./sections/Project/Project"
import Contact from "./sections/Contact"
import Footer from './sections/Footer'
import { NavProvider } from './context/NavContext';

function App() {
  return (
    <>
      <NavProvider>
        <Nav />
        <Home />
        <About />
        <Project />
        <Contact />
      </NavProvider>
      <Footer />
    </>
  )
}

export default App
