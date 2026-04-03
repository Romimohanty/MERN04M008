import { useState } from 'react'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Card from './components/Card'


function App() {
  function fun(){
    console.log("this is fun")
  }


  let animals=[
   { img:"https://static.vecteezy.com/system/resources/thumbnails/050/393/628/small/cute-curious-gray-and-white-kitten-in-a-long-shot-photo.jpg",
    title:"Kitten",
    desc:"Cute and curious kitten",
    btn:"Adopt Me"
  },

  { img:"https://img.freepik.com/free-photo/little-cat-sitting-grass_1150-17019.jpg?semt=ais_incoming&w=740&q=80",
    title:"Puppy",
    desc:"Playful and friendly puppy",
    btn:"Adopt Me"
  },

  { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauJ6evjDqOODiZ0VkSH0AGIh3ko7BfCTB2g&s",
    title:"Bunny",
    desc:"Soft and cute bunny",
    btn:"Adopt Me"
  },

  { img:"https://img.freepik.com/free-photo/little-cat-sitting-grass_1150-17019.jpg?semt=ais_incoming&w=740&q=80",
    title:"Gerbil",
    desc:"Small and energetic gerbil",
    btn:"Adopt Me"
  },

]
  return (
    <>
      <h1>Fourth React Project</h1>
      <Nav/>
      <Home  obj={{name:"romi",age:22}} func={fun} />
      <About/>
      {/* <Card></Card> */}




      <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 p-5'>
        {
          animals?.map((v,i)=>(
            <Card key={i} animal={animals[i]} />
          ))
        }
      </div>



    </>
  )
}

export default App
