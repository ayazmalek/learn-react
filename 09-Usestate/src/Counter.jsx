import React, { useState } from 'react'

const Counter = () => {
    
    const [num, setNum] = useState(0)
function increament(){
setNum(num+1)
}
function decreament(){
  setNum(num-1)
}
function jumpBy5(){
  setNum(num+5)
}
  return (
    <div>
            <h1>{num}</h1>
<button onClick={increament}>increament</button>
<button onClick={decreament}>decreament</button>
<button onClick={jumpBy5}>kudka by 5</button>
    </div>
  )
}

export default Counter
