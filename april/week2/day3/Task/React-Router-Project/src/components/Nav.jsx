import React from 'react'
import { Link } from 'react-router'


function Nav() {
  return (
    <div>
        <div className='flex justify-evenly p-4 border-b-2 border-green-500'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/users/profile'>profile</Link>
                <Link to='/users/settings'>settings</Link>
                <Link to='/user-details/1'>User Details</Link>
                <Link to='/users'>Users</Link>


            </div>
    </div>
  )
}

export default Nav