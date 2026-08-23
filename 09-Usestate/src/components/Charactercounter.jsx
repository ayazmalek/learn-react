import React, { useState } from 'react'

const Charactercounter = () => {

  const [text, setText] = useState('')

  return (
    <div>

      <input
        type="text"
        placeholder="enter word"
        onChange={(e) => {
          setText(e.target.value)
        }}
      />

      <h2>Characters: {text.length}</h2>

    </div>
  )
}

export default Charactercounter