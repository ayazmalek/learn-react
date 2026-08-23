import React, { useState } from 'react'

const Hideunhide = () => {
 
const [show, setShow] = useState(true)
 
  return (
    <div>
{show && <h1>Hello bro!</h1>}
   <button onClick={() => setShow(!show)}>
  Show/Hide
</button>
    </div>
  )
}

export default Hideunhide