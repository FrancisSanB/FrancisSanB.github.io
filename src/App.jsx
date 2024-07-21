import React from 'react'

import Footer from './components/Footer'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
 
function App() {
  return (
    <div className='App bg-background text-normal dark:bg-dark-background dark:text-dark-normal'>
      <Intro />
      <Projects />
      <Timeline />
      <Footer />
    </div>
  )
}

export default App