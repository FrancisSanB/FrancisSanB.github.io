import React from 'react'

import Footer from './components/Footer'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
 
function App() {
  return (
    <div className='App font-garamond'>
      <h1 className="text-red font-bold text-6xl md:text7xl mb-1 md:mb-3 text-center border-8 bg-slate-200">
        THIS IS A WORK IN PROGRESS, HOPEFULLY FINISHED BY THE END OF SUMMER 2024
      </h1>
      <Intro />
      <Projects />
      <Timeline />
      <Footer />
    </div>
  )
}

export default App