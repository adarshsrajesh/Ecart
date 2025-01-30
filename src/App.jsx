import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'


import Pnf from './pages/Pnf'
import Home from './pages/Home'
import View from './pages/View'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Wishlist" element={<Wishlist/>}></Route>
      <Route path="/:id/View" element={<View/>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
      <Route path="/Pnf" element={<Pnf/>}></Route>


    </Routes>
    <Footer/>
        
    </>
  )
}

export default App
