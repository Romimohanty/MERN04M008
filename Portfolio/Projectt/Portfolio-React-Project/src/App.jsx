
import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[#070d1a]">
      <Navbar />
      
      <section id="about">
        <About />
      </section>

      <section id="skill">
        <Skill />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <footer className="py-10 text-center text-gray-500 bg-gray-900">
        <p>romimohantyromimohanty@gmail.com | +91-8926015958</p>
        <p>Made by:-Romi Mohanty🌷</p>
      </footer>
    </div>
  )
}

export default App
