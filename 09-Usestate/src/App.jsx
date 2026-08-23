import React, { useState } from 'react'

const App = () => {

 const [num, setNum] = useState(10)

   function incNum(){
        setNum(25)
    }
  return (
  
    <div>
      <h1>value of num is {num}</h1>
      <button onClick={incNum}>click</button>
    </div>
  )
}

export default App
