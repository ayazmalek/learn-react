import React, { useState } from 'react'

const Inputuse = () => {
    const [name, setName] = useState('')
    
  return (
    <div>
    <input
  type="text" placeholder='enter your name'
  onChange={(e) => setName(e.target.value)}
/> 
<h1>hello ,{name}</h1>
    </div>
  )
}

export default Inputuse
