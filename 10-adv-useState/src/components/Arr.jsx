import React, { useState } from 'react'

const Arr = () => {
    const [num, setNum] = useState([10,20,30])
    const btnClicked= ()=>{
const newNum = [...num]
newNum.push(40)
setNum(newNum)
    }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default Arr


// note: make new array everytime when youu want to push or pop any element .
// dont do any operation on existing reactstate array here its "num".make "newNum" array and do whatever you want