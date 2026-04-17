import React from 'react'
import Card from './Card'

function Movies() {

  let movies=[{
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZM9-zAl_EoeaSK1csbtsiXAsAWrk-Q6GGhwfDipifw&s=10',
      name:'Bhoot1',
      rating:'4.5⭐'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_DgY4OwsntyOK84wpZsv-zlwbpxxNhrFhUELSZ6jGw&s=10',
      name:'Bhoot2',
      rating:'4.2⭐'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZw4_l9UCOUxO9CYDGGpcqmtNQYJbS8l3pThdYS7Wpng&s',
      name:'Bhoot3',
      rating:'4.0⭐'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTU3vMtzohOT9vq_N5nuAqMua4RnEaIPvr715ie9wH7g&s=10',
      name:'Bhoot4',
      rating:'4.1⭐'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJeyqu7tGjQXYPJjc6L4gl3fvhL4ynv_MhGUlthl_xw&s=10',
      name:'Bhoot5',
      rating:'4.3⭐'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnhe-1cpJE1h3ECzf31Jt-GPvoAKDNOLLqZOKpC2A0Dg&s=10', 
      name:'Bhoot6',
      rating:'4.4⭐'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJtkKQMB7MWtcmPncBN1L2-kA8OLVxPoDaAlulr2GRQ&s=10',
      name:'Bhoot7',
      rating:'4.5⭐'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxGDkj_wotuZse8JOO3lQggqKYtiyiWRxMkQn_ynRUgA&s=10' ,
      name:'Bhoot8',
      rating:'4.6⭐'
    }
  ]
  return (
    <div className='grid grid-cols-4'>{
      movies?.map((v,i)=>(
        <Card movi={v}></Card>
      ) 
    )
      }
    </div>

  )
}

export default Movies