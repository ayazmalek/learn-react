import React, { useState } from 'react'

const Arrobject = () => {
    const [items, setItems] = useState([
  { name: "React", completed: false }
])

  const btnClicked = () => {
    const newItems = items.map(item => ({
      ...item,
      completed: !item.completed
    }))

    setItems(newItems)
  }


  return (
    <div>
     <h1>
        {items[0].name} {items[0].completed ? "✅" : "❌"}
      </h1>

      <button onClick={btnClicked}>
        Toggle
      </button>
    </div>
  )
}

export default Arrobject
