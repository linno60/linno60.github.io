import React, { Suspense, useEffect } from "react";

import Loading from './sections/Loading/Loading'
import Nav from "./sections/Nav/Nav"
import Home from './sections/Home/Home'
import About from "./sections/About/About"
import Project from "./sections/Project/Project"
import Contact from "./sections/Contact/Contact"
import Footer from './sections/Footer/Footer'
import { NavProvider } from './context/NavContext';

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <NavProvider>
          <Nav />
          <Home />
          <About />
          <Project />
          <Contact />
        </NavProvider>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
