import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Footor from './components/Footor'
import Navbar from './components/Navbar'
import About from './pages/About'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import Map from './pages/Map'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Station from './pages/Station'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stations' element={<Station />} />
        <Route path='/stations/:brand' element={<Station />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/map' element={<Map />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/appointments' element={<Appointment />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointments/:statId' element={<Appointment />} />
      </Routes>
      <Footor />
    </div>
  )
}

export default App
