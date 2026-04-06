import { createContext, useState } from 'react'
import Child from './Child'
import Home from './Home'



//for creating the context object

const stdContext= createContext();
const emplContext=createContext();
function App() {
  //to create the context object
  //add the provider component to a particular component
  //add the value to the provider
  //export the context object 

  //how to acces the context object in the child component
  //use the hook(useContext) and get the value
  return (
    <>
      <h1>React Project</h1>
      <stdContext.Provider value={20}>
        <emplContext.Provider value={{name:'romi',age:22}}>
           <Child/>
        </emplContext.Provider>
      </stdContext.Provider>
      <Home/>
    </>
  )
}
export {stdContext,emplContext}
export default App
