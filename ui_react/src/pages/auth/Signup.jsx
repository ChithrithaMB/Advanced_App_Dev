import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const [errors, setErrors] = useState({})

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        setErrors({ ...errors, [name]: '' }) 
    }

    const handleSignup = (e) => {
        e.preventDefault()
        
        const validationErrors = {}
        if (!formData.name) {
            validationErrors.name = 'Name is required'
        }
        if (!formData.phone) {
            validationErrors.phone = 'Phone is required'
        }
        if (!formData.email) {
            validationErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Invalid email format'
        }
        if (!formData.password) {
            validationErrors.password = 'Password is required'
        }
        if (!formData.confirmPassword) {
            validationErrors.confirmPassword = 'Confirm Password is required'
        } else if (formData.password !== formData.confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match'
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            
            navigate('/login') 
        }
    }

    return (
        <div className='p-0 m-0 h-screen flex justify-center items-center bg-gradient-to-br from-blue-400 to-white'>
            <form className='flex flex-col gap-5 bg-white p-8 rounded-md shadow-md w-[30%] items-center justify-center' onSubmit={handleSignup}>
                <input type="text" name="name" id="name" placeholder='Name' value={formData.name} onChange={handleInputChange} className='bg-gray-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-500 rounded-sm w-full text-gray-700 placeholder-gray-500 p-2 shadow-sm' />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                <input type="number" name="phone" id="phone" placeholder='Phone' value={formData.phone} onChange={handleInputChange} className='bg-gray-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-500 rounded-sm w-full text-gray-700 placeholder-gray-500 p-2 shadow-sm' />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                <input type="email" name="email" id="email" placeholder='Email' value={formData.email} onChange={handleInputChange} className='bg-gray-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-500 rounded-sm w-full text-gray-700 placeholder-gray-500 p-2 shadow-sm' />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                <input type="password" name="password" id="password" placeholder='Password' value={formData.password} onChange={handleInputChange} className='bg-gray-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-500 rounded-sm w-full text-gray-700 placeholder-gray-500 p-2 shadow-sm' />
                {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleInputChange} className='bg-gray-100 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-500 rounded-sm w-full text-gray-700 placeholder-gray-500 p-2 shadow-sm' />
                {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
                <button type="submit" className='w-full bg-blue-500 text-white p-2 rounded-sm font-bold mt-4 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>Register</button>
                <p className='text-gray-600'>Already have an account? <span className='text-blue-500 cursor-pointer font-bold' onClick={() => navigate('/login')}>Login!</span></p>
            </form>
        </div>
    )
}

export default Signup
