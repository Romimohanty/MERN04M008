import { Route, Routes } from 'react-router'
import UserHome from './components/UserHome'
import UserDetails from './components/UserDetails'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto"> 
        <Routes>
          <Route path='/' element={<UserHome />}></Route>
          <Route path='/user/:id' element={<UserDetails />}></Route>
        </Routes>
      </div>
    </>
  )
}
export default App