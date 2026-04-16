import { useEffect,useRef } from 'react'
import './App.css'


function App() {
   const btnref=useRef()
        const countRef=useRef(0)
        useEffect(()=>{
          console.log(btnref.current);
        },[])


        function handleclick(){
         countRef.current=countRef.current+1;
         console.log(countRef.current);  
       }

  return (
    <>
      <h1>UseRef Task Project</h1>
    <button ref={btnref} onClick={handleclick} style={{width:100, height:30,marginLeft:500,marginTop:40}}>increase</button>

    </>
  )
}

export default App