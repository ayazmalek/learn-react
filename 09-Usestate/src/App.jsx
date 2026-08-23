
import { useState } from "react"
import Usestatebase from "./components/usestatebase"
import HideUnhide from "./components/Hideunhide"
import Inputuse  from "./components/Inputuse"
import Charactercounter from "./components/Charactercounter"
import Like from "./components/Like"
import Counter from "./Counter"
const App = () => {

    
  return (

  
    <div>
  <Counter/>
<HideUnhide/>
  <Usestatebase />
  <Inputuse />
  <Charactercounter/>
  <Like/>
    </div>
  )
}

export default App
