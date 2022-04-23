import React, { useEffect, Suspense } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Loading from './components/Loading/Loading'
import Nav from './sections/Nav/Nav'

const BackToTop = React.lazy(() => import('./components/BackToTop'));
const NavProvider = React.lazy(() => import('./context/NavContext'));
const Home = React.lazy(() => import('./sections/Home/Home'));
const About = React.lazy(() => import('./sections/About/About'));
const Project = React.lazy(() => import('./sections/Project/Project'));
const Contact = React.lazy(() => import('./sections/Contact/Contact'));
const Footer = React.lazy(() => import('./sections/Footer/Footer'));

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Suspense fallback={<Loading />}>
        <BackToTop />
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
