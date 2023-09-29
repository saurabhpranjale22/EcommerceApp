import React from 'react'
import { useState, useEffect } from "react";
import BounceLoader from 'react-spinners/BounceLoader'
import Product from '../Components/Product';
import { Link } from 'react-router-dom';
import {FiSearch} from 'react-icons/fi';
import { Products } from './Data';

const Home = () => {


  const [loading, setLoading] = useState(false);
  const [searchWord,setSearchWord] = useState("");
  const [data, setData] = useState([]);
  
const loadingo = () =>{
setLoading(true)
setTimeout(()=>{
setData(Products)
setLoading(false)
},3000)
}

useEffect(()=>{
loadingo()
},[])

  

  const filterProductsByCategory = (category) => {
    const filteredProducts = Products.filter(
      (product) => product.category === category
    );
    setData(filteredProducts);
  };

  const filterProductsBySearchTerm = (searchTerm) => {
    const filteredProducts = Products.filter((items) =>
      items.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredProducts);
  };

  const handleSearch = () => {
    filterProductsBySearchTerm(searchWord);
  };

  return (
    <div>

      <div className='fixed hidden sm:hidden  md:left-[18rem] top-6 md:top-5 z-20 md:flex flex-row items-center xs:hidden '><input type='text' placeholder='Search for more .....' className='border-2 border-black w-[14rem] md:w-[38rem] md:h-10 h-8 rounded-full text-center border-none ring-2 ' onChange={(e)=>{setSearchWord(e.target.value)}}  /><FiSearch color='black' className='absolute right-4 cursor-pointer' onClick={handleSearch} size={25} /></div>
    {
      loading ? <div className='w-full h-[28rem] grid grid-cols-1 place-items-center'><BounceLoader   color={'#1B1464'}
      loading={loading}
      size={80}/> </div>  :
      data.length > 0 ? 
      
      (<> 
      
      <h1 className='font-extrabold text-2xl text-center mt-9'>BEST OF SP EXCLUSIVE BRANDS</h1>
      <div className='flex flex-row justify-center items-center w-full h-[4rem]'>
  <button type='button' className='text-gray-700 border-2 border-gray-700  font-semibold text-[12px] sm:px-3 p-1 px-1       uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' value="all" onClick={(e)=>{setData(Products)}}>All</button>
  <button type='button' className='text-gray-700 border-2 border-gray-700  font-semibold text-[12px] sm:px-3 p-1 px-1 ml-1  uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' value="grocery" onClick={(e)=>{filterProductsByCategory(e.target.value)}}>Grossaries</button>
  <button type='button' className='text-gray-700 border-2 border-gray-700  font-semibold text-[12px] sm:px-3 p-1 px-1 ml-1  uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' value="fashion" onClick={(e)=>{filterProductsByCategory(e.target.value)}}>Fashion</button>
  <button type='button' className='text-gray-700 border-2 border-gray-700  font-semibold text-[12px] sm:px-3 p-1 px-1 ml-1  uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' value="electronics" onClick={(e)=>{filterProductsByCategory(e.target.value)}}>Electronics</button>
  <button type='button' className='text-gray-700 border-2 border-gray-700  font-semibold text-[12px] sm:px-3 p-1 px-1 ml-1  uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in' value="toys" onClick={(e)=>{filterProductsByCategory(e.target.value)}}>Kids</button>
</div>
       <div className="flex flex-row flex-wrap justify-center  max-w-6xl p-2 mx-auto space-y-10 space-x-5  min-h-[80vh]">
        {
          data.map( (post) => (
           
          <Product key = {post.id} post={post}/>
         
        ) )
        }
      </div></>) :
      <div className="bg-orange-500 md:max-w-[40%] max-w-[70%]  rounded-xl m-auto h-[20rem] my-[5rem] grid grid-cols-1 place-items-center">
      <h1 className="flex flex-col text-center font-semibold font-mono text-white  text-xl relative">Aaaah! <br/>  Somethis went wrong <div className="text-5xl animate-bounce absolute top-28 left-[4.3rem]">😕</div></h1>
      <Link to={"/"}>
        <button onClick={()=>{loadingo()}} className="bg-slate-900 rounded-full text-white px-3 font-extrabold hover:scale-105 duration-200 ease-in py-2">
          Reload
        </button>
      </Link>
    </div>
    }
  </div>
  )
}

export default Home