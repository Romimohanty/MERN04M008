import React from 'react'

function Addtocart(props) {
  const total = props.cartItems.reduce((acc, item) => {
    return acc + Number(item.price.replace('$', ''));
  }, 0);

  const handleCheckout = () => {
    if (props.cartItems.length === 0) {
      alert("Aapka cart pehle hi khali hai!");
      return;
    }

    alert("Payment Successful! Aapka order place ho gaya hai.");
    props.clearCart(); 
  };

  return (
    <div className="p-4 border rounded bg-white shadow-sm">
      <h1 className="text-xl font-bold border-b pb-2">Your Shopping Cart</h1>
      
      {props.cartItems.length === 0 ? (
        <p className="py-4 text-gray-500 text-center">Cart is empty</p>
      ) : (
        <ul className="mt-4">
          {props.cartItems.map((item, index) => (
            <li key={index} className="flex justify-between border-b py-2 text-sm">
              <span>{item.title}</span>
              <span className="font-bold">{item.price}</span>
              
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-12 h-12 object-cover rounded-md border" 
              />
            </li>
          ))}
        </ul>
      )}

      <h2 className="text-lg font-bold mt-4 text-green-700">
        Grand total: ${total.toFixed(2)}
      </h2>

      <button 
        onClick={handleCheckout}
        className="w-50 bg-black text-white py-2 mt-4 rounded hover:bg-gray-800 transition-colors"
      >
        Pay Now & Checkout ({props.cartItems.length})
      </button>
    </div>
  )
}

export default Addtocart;