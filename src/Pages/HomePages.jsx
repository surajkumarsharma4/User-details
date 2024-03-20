import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const HomePages = () => {
  return (
    <div className='home'>
      <NavBar/>
      <Outlet />
    </div>
  )
}

export default HomePages