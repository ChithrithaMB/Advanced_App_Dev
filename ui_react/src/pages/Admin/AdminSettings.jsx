import React, { useState } from 'react';
import { FiKey, FiEdit2 } from 'react-icons/fi';
import { FaUserCog } from 'react-icons/fa';


const AdminSettings = () => {
    const [editModel, setEditModel] = useState(false);
    const [editKeyModel, setEditKeyModel] = useState(false);

    return (
        <>
            <div className='h-[90vh] flex justify-center items-center shadow-sm shadow-slate-100 w-[84vw]'>
                <div className='h-[40vh] w-[50vw] flex flex-row shadow-md shadow-blue-500/20'>
                    <div className='w-1/2 h-full flex flex-col'>
                        <div className='h-1/6 w-full flex justify-end items-center px-3 gap-3'>
                            <button className='p-2 border-2 border-blue-500/50 hover:border-blue-700 hover:bg-blue-200/40 rounded-full' onClick={() => { setEditModel(true) }}>
                                <FiEdit2 className='text-blue-500' />
                            </button>
                            <button className='p-2 border-2 border-blue-500/50 hover:border-blue-700 hover:bg-blue-200/40 rounded-full' onClick={() => { setEditKeyModel(true) }}>
                                <FiKey className='text-blue-500' />
                            </button>
                        </div>
                        <div className='h-3/6 w-full flex justify-center items-center'>
                            <FaUserCog className='h-28 w-28 border-4 border-blue-500/10 square-full shadow-md shadow-blue-500/40' /> 
                        </div>
                        <div className='h-2/6 w-full flex justify-center items-center'>
                            <p className='text-3xl font-bold text-gray-500'>Admin</p>
                        </div>
                    </div>
                    <div className='w-1/2 h-full flex justify-center items-center flex-col'>
                        <div className='h-1/2 w-full flex flex-row border-2 border-blue-100/50'>
                            <div className='w-1/3 h-full flex items-center justify-start text-blue-500 font-bold bg-blue-100/10 px-4'>
                                Email
                            </div>
                            <div className='w-2/3 h-full flex items-center justify-start font-semibold px-4'>
                                adminDD@gmail.com
                            </div>
                        </div>
                        <div className='h-1/2 w-full flex flex-row border-2 border-orange-100/50'>
                            <div className='w-1/3 h-full flex items-center justify-start text-blue-500 font-bold bg-blue-100/10 px-4'>
                                Phone
                            </div>
                            <div className='w-2/3 h-full flex items-center justify-start font-semibold px-4'>
                                9987654123
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {editModel && (
                <>
                    <div className='h-screen w-screen flex absolute z-50 bg-gray-500/60 justify-center items-center top-0 left-0'>
                        <div className='h-[45vh] w-[30vw] flex flex-col shadow-md shadow-blue-500/20 bg-white rounded-sm'>
                            <div className='h-5/6 w-full flex flex-col justify-center items-center p-2 gap-4'>
                                <input type="text" placeholder='Name' value='Divyakarthikaa J P' className='bg-blue-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                                <input type="email" placeholder='Email' value='Dreamydelight@gmail.com' className='bg-blue-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                                <input type="number" placeholder='Phone' value='9798653421' className='bg-blue-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                            </div>
                            <div className='h-1/6 w-full flex flex-row justify-center items-center'>
                                <button className='w-1/2 h-full bg-red-500 font-bold text-white' onClick={() => { setEditModel(false) }}> Cancel </button>
                                <button className='w-1/2 h-full bg-green-500 font-bold text-white'>Update Profile</button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {editKeyModel && (
                <>
                    <div className='h-screen w-screen flex absolute z-50 bg-gray-500/60 justify-center items-center top-0 left-0'>
                        <div className='h-[45vh] w-[30vw] flex flex-col shadow-md shadow-blue-500/20 bg-white rounded-sm'>
                            <div className='h-5/6 w-full flex flex-col justify-center items-center p-2 gap-4'>
                                <input type="password" placeholder='Old Password' value='' className='bg-blue-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                                <input type="password" placeholder='New Password' value='' className='bg-blue-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                                <input type="password" placeholder='Confirm Password' value='' className='bg-blue-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                            </div>
                            <div className='h-1/6 w-full flex flex-row justify-center items-center'>
                                <button className='w-1/2 h-full bg-red-500 font-bold text-white' onClick={() => { setEditKeyModel(false) }}> Cancel </button>
                                <button className='w-1/2 h-full bg-green-500 font-bold text-white'>Update Password</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default AdminSettings;
