import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Station from './pages/Station'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stations' element={<Station />} />
        <Route path='/stations/:locations' element={<Station />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointments/:statId' element={<MyAppointments />} />
      </Routes>

    </div>
  )
}

export default App
