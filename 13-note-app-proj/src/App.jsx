import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const submitHandler = (e)=>{
e.preventDefault()
console.log(title,details);
setDetails('');
setTitle('');
  }
  return (
    <div className='h-screen bg-black text-white'>
      <form  onSubmit={(e)=>{
submitHandler(e)
      }} className='flex justify-between p-10' >
        <div className='flex gap-4 w-1/2 items-start flex-col'>
  <input
          onChange={(e)=>{
            setTitle(e.target.value)

          }}
          value={title}
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded '
        />
          {/* DETAILED VALA INPUT  */}
        <textarea
        onChange={(e)=>{
        setDetails(e.target.value)
        }}
        value={details}
          type="text"
          className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded '
          placeholder='Write Details here'
        />

        <button
          className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded' >
          Add Note
        </button>
        </div>
      </form>
 <div className='lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          

             <div  className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'></h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'></p>
              </div>
              <button 
                
               className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default App
