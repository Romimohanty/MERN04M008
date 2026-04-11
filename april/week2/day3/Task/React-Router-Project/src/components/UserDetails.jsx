import React from 'react'
import { useParams } from 'react-router'


function UserDetails() {
    const { Id } = useParams();
    
  return (
    <div>UserDetails
       <br />
       user ID:{Id}

    </div>
  )
}

export default UserDetails