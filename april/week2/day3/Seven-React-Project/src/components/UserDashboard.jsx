import React from 'react'
import { Outlet } from 'react-router'

function UserDashboard() {
  return (
    <div>UserDashboard
        <Outlet />
    </div>
  )
}

export default UserDashboard