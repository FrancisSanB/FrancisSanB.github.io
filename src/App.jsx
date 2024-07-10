import React from 'react'

import Footer from './components/Footer'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
 
function App() {
  return (
    <div className='App font-garamond'>
      <Intro />
      <Projects />
      <Timeline />
      <Footer />
    </div>
  )
}

export default App