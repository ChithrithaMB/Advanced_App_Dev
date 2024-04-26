import React from 'react';
import Errimg from '../assets/img/err404.png'; 
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
    const navigate = useNavigate();

    const routeHome = () => {
        navigate('/');
    };

    return (
        <div className="h-screen w-screen bg-gradient-to-b from-purple-200 to-pink-200 flex items-center justify-center">
            <div className="h-[50vh] w-[40vw] flex items-center justify-center flex-col shadow-md rounded-lg bg-white">
                <div className="h-3/4 flex items-center justify-center flex-col w-full">
                    
                    <img src={Errimg} alt="404" className="w-[50%]" />
                    <h1 className="text-8xl font-bold font-mono text-purple-500">404</h1>
                    <p className="font-semibold text-purple-700">Oops! Page not found.</p>
                </div>
                <div className="h-1/4 w-full flex justify-center items-center">
                    <button className="w-[80%] bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-md font-bold mt-4 shadow-md" onClick={routeHome}>
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Error404;
