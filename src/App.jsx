import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import BookAnAppointment from "./Components/BookAnAppointment";
import Gallery from './Pages/Gallery';


const App = () => {
  return (
    <> 
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/book-an-appointment' element={<BookAnAppointment />} />
      <Route path='/gallery' element={<Gallery />} />
    </Routes>
    <Footer />
    
    </>
  )
}

export default App