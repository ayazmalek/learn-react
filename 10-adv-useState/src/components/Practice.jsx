import React, { useState } from 'react'

const Practice = () => {
    const [nums, setNums] = useState([10, 20, 30])
    const [items, setItems] = useState(["Apple", "Banana"])
    const [item, setItem] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ])

const btnClicked = () => {
  const newItems = [...items, "Mango"]
  setItems(newItems)
  const newItem = item.filter(item => item !== "CSS")
    setItems(newItem)
  const newNums = nums.map(num => num + 5)
  setNums(newNums)
}

  return (

    <div>
        {/* push/pop concept */}
      <h1>{items}</h1>
      <button onClick={btnClicked}>click</button> 

      {/* map concept */}
        <h1>{nums.join(", ")}</h1>

      <button onClick={btnClicked}>
        Increase
      </button>
{/* filter concept */}
        <h1>{items.join(", ")}</h1>

      <button onClick={btnClicked}>
        Delete CSS
      </button>
    </div>
  )
}

export default Practice
