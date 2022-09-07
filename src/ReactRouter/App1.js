import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import './Home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function App1() {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, [])

    return (
        <div>
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

export default App1