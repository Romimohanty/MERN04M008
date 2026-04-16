import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const btnRef=useRef()
  console.log(btnRef);
 const divRef=useRef()

  useEffect(()=>{
      console.log(btnRef.current.innerText);
 },[])
  function handleclick(){
  divRef.current.style.backgroundColor="red" }
  return (
    <>
      
      <h1>UseRef React Project</h1>
      <div 
      ref={divRef}
      style={{color: 'blue',height: '100px',width: '200px',border: '1px solid black'}}>hii</div>
      <button ref={btnRef} onClick={handleclick}  style={{width:'80px'}}>
        Click
      </button>
    </>
  )
}

export default App

