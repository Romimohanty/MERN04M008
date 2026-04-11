import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'  
import Profile from './components/Profile'
import Settings from './components/Settings'
import UserDetails from './components/UserDetails'
import Nav from './components/Nav'


function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about'element={<About/>}></Route>

        <Route path='/users'element={<Users/>}>

             <Route path='profile'element={<Profile/>}></Route>
            <Route path='settings'element={<Settings/>}></Route>
             </Route>
            <Route path='/user-details/:Id' element={<UserDetails/>}></Route>

      </Routes>
    </>
  )
}

export default App
