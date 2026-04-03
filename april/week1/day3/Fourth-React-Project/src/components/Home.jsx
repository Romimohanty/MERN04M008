import React from 'react'
import Nav from './Nav'

function Home(props) {
  return (
    <div>
        <Nav />
        Home
        object value: <br />
        name: {props?.obj?.name}
        age: {props?.obj?.age}
        {props.func()}
        </div>
  )
}

export default Home