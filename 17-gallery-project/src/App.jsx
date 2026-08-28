import { ImageOff } from 'lucide-react'
import React from 'react'
import axios from 'axios'
const App = () => {

  const getData = async () => {
  const response = await axios(
    "https://picsum.photos/v2/list?page=2&limit=100"
  );

  const data = response.data;

  console.log(data);
}; 
  return (
    <div className='bg-black h-screen text-white  '>
    <button onClick={getData}
    className='bg-green-600 px-5 py-2 text-white rounded  mb-3 active:scale-95'> get data</button>

    </div>
  )
}

export default App
