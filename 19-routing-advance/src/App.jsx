import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import  Home from './pages/Home'
import { Routes , Route } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import Notfound from './pages/Notfound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'

const App = () => {
  return (
    <div className='h-screen bg-black text-white '>
     <Navbar />
  <Routes>
    <Route path='/' element={<Home />}/>
<Route path='/about' element={<About />} />
<Route  path='*' element={<Notfound/>} />
<Route path='/product' element={<Product />} >

<Route path='men' element={<Men />} />
<Route path='women' element={<Women />} />
<Route path='kids' element={<Kids />} />
</Route>

<Route path='/product/men' element={<Men />} />
<Route path='/product/women' element={<Women />} />
<Route path='/product/kids' element={<Kids />} />

  </Routes>
     <Footer/> 
    </div>
  )
}

export default App
