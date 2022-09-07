import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Menu from './Components/Menu'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import './styles/style.css'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  )
}