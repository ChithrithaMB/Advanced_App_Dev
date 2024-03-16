import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../public/Navbar'

const WebLayout = () => {
    // const auth = false
    // const uname = "mohan"
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default WebLayout