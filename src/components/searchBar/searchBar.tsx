import React from 'react';
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className='rounded-full border-grey-400 border flex px-5 relative min-w-[33%] justify-between'>
      <input type="text" className='border-0 bg-transparent focus:outline-none w-[85%]' placeholder='Search' />
      <button className='hover:text-[#4ECCA3]'><IoSearch /></button>
    </div>
  )
}

export default SearchBar
