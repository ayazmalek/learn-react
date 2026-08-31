import React from 'react'

const Navbar = () => {
  return (
    <div className='flex  bg-gray-800 items-center px-8 py-4 justify-between'>
      <h2 className='text-xl font-bold'>Bingo</h2>
<div className='flex gap-8'>
       <a to='/'>Home</a>
                <a to='/about'>About</a>
                <a to='/contact'>Contact</a>
                <a to='/product'>Product</a>
    </div>
    </div>
  )
}

export default Navbar
