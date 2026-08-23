
import { useState } from "react"
import Usestatebase from "./components/usestatebase"
const App = () => {
const [num, setNum] = useState(0)
function increament(){
setNum(num+1)
}
function decreament(){
  setNum(num-1)
}
    
  return (

  
    <div>
        <h1>{num}</h1>
<button onClick={increament}>increament</button>
<button onClick={decreament}>decreament</button>

  {/* <Usestatebase /> */}
    </div>
  )
}

export default App
