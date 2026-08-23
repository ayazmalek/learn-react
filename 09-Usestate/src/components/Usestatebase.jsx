import React, { useState } from 'react'

const Usestatebase = () => {
     const [num, setNum] = useState(10)
 const [userName, setName] = useState('deepak')

   function cngNum(){
        setNum(25)
        setName('deelip')
    }
  return (
    <div>
       <h1>value of num is {num} & <br/> userName is {userName}</h1>
      <button onClick={cngNum} >click</button>

    </div>
  )
}

export default Usestatebase
