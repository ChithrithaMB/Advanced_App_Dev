import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: '', 
        secretCode: '', 
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        
        const validationErrors = {};
        if (!formData.email) {
            validationErrors.email = 'Email is required';
        }
        if (!formData.password) {
            validationErrors.password = 'Password is required';
        }
        if (!formData.role) {
            validationErrors.role = 'Role is required';
        }

        
        if (formData.role === 'admin' && formData.secretCode !== '5467') {
            validationErrors.secretCode = 'Invalid secret code';
        }

        
        if (Object.keys(validationErrors).length === 0) {
            setErrors({});
            
            navigate(`/${formData.role}/dashboard`);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className='h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 to-white'>
            <form className='flex flex-col gap-5 bg-white p-8 rounded-md shadow-md w-1/3 items-center justify-center' onSubmit={handleLogin}>
                <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-gray-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-500 rounded-sm w-full text-gray-700 placeholder-gray-500 p-2 shadow-sm ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                <input
                    type="password"
                    name="password"
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                    className={`bg-gray-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-500 rounded-sm w-full text-gray-700 placeholder-gray-500 p-2 shadow-sm ${errors.password ? 'border-red-500' : ''}`}
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                <div className="flex items-center gap-4">
                    <label htmlFor="role" className="text-gray-700">Login as:</label>
                    <select
                        name="role"
                        id="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="bg-gray-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-500 rounded-sm text-gray-700 p-2 shadow-sm"
                    >
                        <option value="" disabled>Select Role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                {errors.role && <span className="text-red-500 text-sm">{errors.role}</span>}
                {formData.role === 'admin' && (
                    <input
                        type="text"
                        name="secretCode"
                        placeholder='Secret Code'
                        value={formData.secretCode}
                        onChange={handleChange}
                        className={`bg-gray-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-500 rounded-sm w-full text-gray-700 placeholder-gray-500 p-2 shadow-sm ${errors.secretCode ? 'border-red-500' : ''}`}
                    />
                )}
                {errors.secretCode && <span className="text-red-500 text-sm">{errors.secretCode}</span>}
                <button type="submit" className='w-full bg-blue-500 text-white p-2 rounded-sm font-bold mt-4 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>Login</button>

                <p className='text-gray-600 mt-4'>Don't have an account? <span className='text-blue-500 cursor-pointer font-bold' onClick={() => navigate('/signup')}>Register!</span></p>
            </form>
        </div>
    );
};

export default Login;
