import { useState } from "react";

const App = () => {
  const [name, setName] = useState('')
   const submitHandler = (e)=>{
e.preventDefault();
console.log('form submitted ');

   }

  return (
    <div>
      <form  onSubmit={(e)=>{
submitHandler(e)
      }}>
        <input  type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            console.log(e.target.value)
          }}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
