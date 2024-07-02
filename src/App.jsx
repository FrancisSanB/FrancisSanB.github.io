import React from 'react'

import Footer from './components/Footer'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
 
function App() {
  return (
    <div className='App font-garamond'>
      <Intro />
      <Portfolio />
      <Timeline />
      <Footer />
    </div>
  )
}

export default App