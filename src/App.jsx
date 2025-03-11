import React from 'react'

import Footer from './components/Footer'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Experiences from './components/Experiences'
import About from './components/About'
import Blog from './components/Blog'
 
function App() {
  return (
    <div className='App bg-background text-normal dark:bg-dark-background dark:text-dark-normal'>
      <Intro />
      <About />
      <Projects />
      <Experiences />
      <Blog />
      <Footer />
    </div>
  )
}

export default App