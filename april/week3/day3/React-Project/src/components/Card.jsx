import React from 'react'

function Card(props) {
  return (
    <div className='w-70 h-100  mt-5  ml-9'>
        <img src={props.movi.img} alt='Movie Image'  className='h-90 w-70'/>
        <div className='flex gap-30 font-bold'>
            <h2>{props.movi.name}</h2>
            <p>Rating: {props.movi.rating}</p>
        </div>
    </div>
  )
}

export default Card