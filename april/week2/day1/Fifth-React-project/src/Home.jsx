import React from 'react'
import { useState } from 'react'

function Home() {
    //useState()
    //it is used to maintain the state
    //syntax of useState
    //const[variable,function(this is function used to update the variable)]=useState(initialization value)

let[a,setA]=useState(0);
let b=10;
const handleClick=()=>{
    console.log(" hii clicked");
//     a=a+1;
//     console.log("a value is:",a);
setA(a+1);
b=b+1;
console.log(b);
}



  return (
    <div>Home
        value :{a}
        <br />
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Home