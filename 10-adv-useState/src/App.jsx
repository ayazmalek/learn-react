import React, { useState } from 'react'
import Practice from './components/Practice';

const App = () => {
    const [num, setNum] = useState({user: 'ayaz', age:19})
    const btnClicked=()=>{
   const newNum = {...num};
   newNum.user = 'thor'
   newNum.age = 1005;
   setNum(newNum)
    }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>click</button>
      <Practice/>
    </div>
  )
}

export default App
