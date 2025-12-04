import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import { Card } from '@mui/material'

const Layout = () => {
  return (
    <>
     <Navbar />
     <Outlet />
     <Card />


    </>
  )
}

export default Layout