
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetails from './components/ProjectDetails'
import About from './components/About';

function App() {
  return (
    <HashRouter>  {/* Use HashRouter instead of BrowserRouter */}
      <Routes>
        <Route path="/" element={
          <>
            <Navbar/>
            <Hero/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
          </>
        }/>
        <Route path="/ProjectDetails/:id" element={
          <>
            <ProjectDetails/>
          </>
        }/>
      </Routes>
    </HashRouter>
  )
}


export default App
