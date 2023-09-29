import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
   <div className="bg-orange-500 md:max-w-[50%] max-w-[80%]  rounded-xl m-auto h-[20rem] my-[5rem] grid grid-cols-1 place-items-center">
      <h1 className="flex flex-col text-center font-extrabold text-white  text-3xl relative">Page Note Found <div className="text-5xl animate-bounce absolute top-20 left-[5.6rem]"> 😴</div></h1>
      <Link to={"/"}>
        <button className="bg-slate-900 text-white px-3 font-extrabold hover:scale-105 duration-200 ease-in py-2">
          Go To Home
        </button>
      </Link>
    </div>
    
  )
}

export default PageNotFound