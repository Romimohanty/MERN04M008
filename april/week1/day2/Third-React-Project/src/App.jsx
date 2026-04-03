
import About from './About'
import './App.css'
import Home from './Home'

function App() {
let a=10;
  return (
    <>
      
          <h1>Get started</h1>
        <Home value={a} arr={[1,2,3,4,5]}>
          <About />
          </Home> 
          </>
  )
}

export default App
