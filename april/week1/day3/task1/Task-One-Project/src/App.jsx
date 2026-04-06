import { useState } from 'react'
import Card from './components/Card'
import Nav from './components/Nav'
import Addtocart from './components/Addtocart'

  function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} cart mein add ho gaya!`);

  }
  const clearCart = () => {
  setCart([]); 
};

  let products=[
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAarMdSZ1aXccbckPieLOjbtyNvVhQrKtkf79FCDfAGnJZXuZBB6vnr8&s=10",
      title:"AC",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      price:"$100.00",
      rating:"⭐⭐⭐⭐⭐",
      btn:"Buy Now"
    },
    {img:"https://m.media-amazon.com/images/I/619gDUPcbNL.jpg",
      title:"Earphones",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      price:"$500.00",
      rating:"⭐⭐⭐⭐",
      btn:"Buy Now"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoY0-opsRUNEdMJnoB4T6inVV8SDJEARLtRg&s",
      title:"Watch",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      price:"$200.00",
      rating:"⭐⭐⭐⭐",
      btn:"Buy Now"},
    {img:"https://m.media-amazon.com/images/I/71d7rfSl0wL.jpg",
      title:"Mobile",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      price:"$1000.00",
      rating:"⭐⭐⭐⭐⭐",
      btn:"Buy Now"},
      {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGsMz9g3T9PfjNeDzAEoCqWCfjp53afA-f8Q&s",
      title:"Laptop",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      price:"$150.00",
      rating:"⭐⭐⭐",
      btn:"Buy Now"},
      {img:"https://m.media-amazon.com/images/I/71zMsBPu3qL.jpg",
      title:"Keyboard",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      price:"$600.00",
      rating:"⭐⭐⭐⭐",
      btn:"Buy Now"},
      {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsuHAJCW-qz5sZZQS8fORe9zNEXzjZm9WTJerrJwOx1A&s",
      title:"Headphones",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      price:"$200.00",
      rating:"⭐⭐⭐⭐",
      btn:"Buy Now"},
      {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCNgelR_X3IiGRhBGbl7K68eWMhR3YrZzz1f0r5HSlvATlGuFN-zb5ltC&s=10",
      title:"washine machine",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      price:"$300.00",
      rating:"⭐⭐⭐⭐",
      btn:"Buy Now"}

  ]

  return (
    <>



    <Nav cartCount={cart.length}/>
      {/* <Card/> */}
      <div className='grid grid-cols-4 gap-2  bg-gray-200'>
        {
          products?.map((v,i)=>(
            <Card product={products[i]}
            addToCart={addToCart}
            ></Card>
          ))
        }
      </div>
        
        <Addtocart cartItems={cart} clearCart={clearCart} />

      

    </>
  )
}

export default App
