import './App.css'
import { Route,Routes } from 'react-router'
import ProductForm from './coomponents/ProductForm'
import ProductDetails from './coomponents/ProductDetails'
import Products from './coomponents/Products'
import Navbar from './coomponents/Navbar'


function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/form' element={<ProductForm/>}></Route>
         <Route path='/products' element={<Products/>}></Route>
         <Route path='/product-detail/:id' element={<ProductDetails/>}></Route>
      </Routes>
    </>
  )
}

export default App
