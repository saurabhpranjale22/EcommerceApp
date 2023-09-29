import React from 'react'
import { Products } from '../Pages/Data';

const Test = () => {
  return (
    <>
    {
        Products.map((item)=>{
            console.log(item)
            return(
                <>
                <img src={item.image} alt='helo' />
                </>
            )
        })
    }
    </>
  )
}

export default Test