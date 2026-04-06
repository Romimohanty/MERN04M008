import React from 'react'
import Nav from './Nav'

function Card(props) {
  return (
    <div className='w-60 border  rounded-2xl h-118 mt-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white '>
      <img src={props?.product?.img} alt="" className='w-full rounded-3xl hover:scale-80 tansition-all duration-300 mb-3 h-50 ' />
      <h2 className='pt-5'>{props?.product?.title}</h2>
      <p className='text-blue-900'>{props?.product?.description}</p>
      <p className='pt-3 font-bold'>{props?.product?.price}</p>
      <h3>{props?.product?.rating}</h3>


      <button onClick={() => props.addToCart(props?.product)}
       className='h-10 w-50 bg-blue-600 mt-3 rounded-2xl text-white-500'>{props?.product?.btn}</button>
        {/* <Nav/> */}
    </div>
  )
}

export default Card