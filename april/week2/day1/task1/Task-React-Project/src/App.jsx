import { useState } from 'react'
import './App.css'


  const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="text-center mt-[200px] font-sans border-1 w-80 bg-blue-300 ml-90  p-5 rounded-lg">
      <h1>Counter: {count}</h1>
        <div className="flex gap-[10px] justify-center">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)} style={{ color: 'red' }}>Reset</button>
      </div>
    </div>


      
         
    </>
  )
}

export default Counter;
