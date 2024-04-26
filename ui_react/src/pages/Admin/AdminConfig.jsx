import { MailPlus, Pencil, ShieldAlert, Trash } from 'lucide-react';
import React from 'react';

const AdminConfig = () => {
    const deleteQuery = () => {
      
    };

    return (
        <>
            <div className='h-[90vh] flex justify-center items-center shadow-sm shadow-slate-100 w-[84vw]'>
                <div className='h-2/4 w-4/6 flex flex-col justify-center items-start shadow-sm shadow-orange-500/30 gap-1 rounded-lg'>
                    <div className='h-5/6 w-full flex flex-row items-center justify-center'>
                        <div className='w-1/2 h-full flex flex-col'>
                            <div className='h-1/4 w-full flex flex-row border-2 border-blue-500 bg-blue-500 rounded-lg'>
                                <div className='w-3/4 h-full flex items-center justify-start text-white font-bold px-4'>
                                    Contact info
                                </div>
                                <div className='w-1/4 h-full flex items-center justify-start px-4 text-white'>
                                    <button className='p-2 border-2 border-slate-100/50 hover:border-white hover:bg-slate-200/40 rounded-full'>
                                        <Pencil className='text-white' />
                                    </button>
                                </div>
                            </div>
                            <div className='h-1/4 w-full flex flex-row border-2 border-blue-500 rounded-lg'>
                                <div className='w-1/3 h-full flex items-center justify-start text-blue-500 font-bold bg-blue-100/10 px-4'>
                                    Email
                                </div>
                                <div className='w-2/3 h-full flex items-center justify-start font-semibold px-4'>
                                    Dreamydelights@gmail.com
                                </div>
                            </div>
                            <div className='h-1/4 w-full flex flex-row border-2 border-blue-500 rounded-lg'>
                                <div className='w-1/3 h-full flex items-center justify-start text-blue-500 font-bold bg-blue-100/10 px-4'>
                                    Phone
                                </div>
                                <div className='w-2/3 h-full flex items-center justify-start font-semibold px-4'>
                                    9897563423
                                </div>
                            </div>
                            <div className='h-1/4 w-full flex flex-row border-2 border-blue-500 rounded-lg'>
                                <div className='w-1/3 h-full flex items-center justify-start text-blue-500 font-bold bg-blue-100/10 px-4'>
                                    Address
                                </div>
                                <div className='w-2/3 h-full flex items-center justify-start font-semibold px-4'>
                                    BANGALORE
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2 h-full flex flex-col'>
                            <div className='h-1/4 w-full flex flex-row border-2 border-blue-500 bg-blue-500 rounded-lg'>
                                <div className='w-3/4 h-full flex items-center justify-start text-white font-bold px-4'>
                                    Social info
                                </div>
                                <div className='w-1/4 h-full flex items-center justify-start px-4 text-white'>
                                    <button className='p-2 border-2 border-slate-100/50 hover:border-white hover:bg-slate-200/40 rounded-full'>
                                        <Pencil className='text-white' />
                                    </button>
                                </div>
                            </div>
                            <div className='h-1/4 w-full flex flex-row border-2 border-blue-500 rounded-lg'>
                                <div className='w-1/3 h-full flex items-center justify-start text-blue-500 font-bold bg-blue-100/10 px-4'>
                                    Facebook
                                </div>
                                <div className='w-2/3 h-full flex items-center justify-start font-semibold px-2 line-clamp-1'>
                                    https://www.facebook.com/
                                </div>
                            </div>
                            <div className='h-1/4 w-full flex flex-row border-2 border-blue-500 rounded-lg'>
                                <div className='w-1/3 h-full flex items-center justify-start text-blue-500 font-bold bg-blue-100/10 px-4'>
                                    Youtube
                                </div>
                                <div className='w-2/3 h-full flex items-center justify-start font-semibold px-2 line-clamp-1'>
                                    https://www.youtube.com/
                                </div>
                            </div>
                            <div className='h-1/4 w-full flex flex-row border-2 border-blue-500 rounded-lg'>
                                <div className='w-1/3 h-full flex items-center justify-start text-blue-500 font-bold bg-blue-100/10 px-4'>
                                    X
                                </div>
                                <div className='w-2/3 h-full flex items-center justify-start font-semibold px-2 line-clamp-1'>
                                    https://x.com/
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-1/6 w-full items-center justify-center'>
                        <h1 className='h-1/2 w-full flex justify-center items-center border-2 border-yellow-500 bg-yellow-500 p-1 font-bold text-white rounded-lg'>
                            Maintenance Mode
                        </h1>
                        <div className='w-full h-full flex items-center justify-center'>
                            <button className='w-[20%] bg-gradient-to-tr from-green-600 to-green-300 text-white p-1 rounded-sm font-bold shadow-md shadow-orange-500/40 flex flex-row items-center justify-center gap-2'>
                                <ShieldAlert /> Setup
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminConfig;
