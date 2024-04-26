import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../components/Public/Navbar'
import Footer from '../components/Public/Footer'







const WebLayout = () => {
  
    return (
        <>
            <Navbar/>
            <Outlet />
            <Footer/>
        </>
    )
}

export default WebLayout