import React from 'react'
import { Outlet } from 'react-router-dom'
import Userleftbar from '../components/Shared/Userleftbar'
import UsertopBar from '../components/Shared/Usertopbar'



const UserLayout = () => {
    return (
        <>
            <div className='m-0 p-0 flex flex-row h-[100vh] w-[100vw] overflow-hidden'>
                <Userleftbar />
                <div className=''>
                    <UsertopBar />
                    <div className='w-[85vw]h-[95vh] flex flex-col p-2 gap-4'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLayout