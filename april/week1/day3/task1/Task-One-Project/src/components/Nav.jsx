
import React from 'react'


function Nav(props) {
  return (
    <div className='h-16 bg-pink-100 flex justify-between items-center px-10 shadow-md'>
      <h2 className='text-2xl font-bold pl-100'>Electronic Store</h2>
      
      <div className='relative cursor-pointer'>
        <i className="fa-solid fa-cart-shopping text-2xl"></i>
        {props.cartCount > 0 && (
          <span className='absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-xs px-2 py-1'>
            {props.cartCount}
          </span>
        )}
      </div>
    </div>
  )
}
export default Nav