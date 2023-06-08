 'use client'
 import About from './Components/About'
import Contact from './Components/Contact'
import Main from './Components/Main'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'


export default function Home() {
  return (
      <div>   
        <title>Portfolio</title>
        <meta name="description" content="Empty" />
        
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      </div>
  )
}
