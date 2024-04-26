import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setValidationErrors({ ...validationErrors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const errors = {};

    if (!formData.name) {
      isValid = false;
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      isValid = false;
      errors.email = 'Email is required';
    }

    if (!formData.phone) {
      isValid = false;
      errors.phone = 'Phone is required';
    }

    if (!formData.message) {
      isValid = false;
      errors.message = 'Message is required';
    }

    if (isValid) {
      
      setMessageSent(true);
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        setMessageSent(false);
      }, 3000);
    } else {
      setValidationErrors(errors);
    }
  };

  return (
    <div className="container mx-auto py-8 h-screen overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      {messageSent && (
        <div className="bg-yellow-500 text-white text-center py-2 mb-4">
          Message has been sent!
        </div>
      )}
      <div className='h-full flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full md:w-1/4 flex flex-col h-1/2 md:h-[60vh] justify-evenly items-center mb-4 md:mb-0'>
          
          <div className='h-1/4 w-3/4 bg-yellow-500 hover:bg-yellow-600 flex flex-col justify-center items-center p-2 rounded-md shadow-md gap-2'>
            <p className='font-bold text-white'>
              <FaEnvelope size={32} />
            </p>
            <h3 className='font-semibold text-white'>
              dreamydelights@gmail.com
            </h3>
          </div>
          
          <div className='h-1/4 w-3/4 bg-yellow-500 hover:bg-yellow-600 flex flex-col justify-center items-center p-2 rounded-md shadow-md gap-2'>
            <p className='font-bold text-white'>
              <FaPhoneAlt size={32} />
            </p>
            <h3 className='font-semibold text-white'>
              +91 9876859234
            </h3>
          </div>
          
          <div className='h-2/5 w-4/5 bg-yellow-500 hover:bg-yellow-600 flex flex-col justify-center items-center p-2 rounded-md shadow-md gap-2'>
            <p className='font-bold text-white'>
              <FaMapMarkerAlt size={32} />
            </p>
            <h3 className='font-semibold text-white'>
              Dreamy Delights Address
              123, Nehru Street, Bengaluru, Karnataka.
            </h3>
          </div>
        </div>
        
        <div className='w-full md:w-2/4 flex flex-col h-full justify-center items-center'>
          <div className="container mx-auto">
            <form onSubmit={handleSubmit} className='w-full md:w-3/4 flex justify-between items-center flex-col gap-4'>
              
              <input type="text" name="name" id="name" placeholder='Name' value={formData.name} onChange={handleChange} className='bg-gray-200 outline-none border-2 border-transparent focus:border-2 focus:border-yellow-500 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
              {validationErrors.name && <p className="text-red-500 mt-1 mb-2">{validationErrors.name}</p>}
              
              <input type="email" name="email" id="email" placeholder='Email' value={formData.email} onChange={handleChange} className='bg-gray-200 outline-none border-2 border-transparent focus:border-2 focus:border-yellow-500 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
              {validationErrors.email && <p className="text-red-500 mt-1 mb-2">{validationErrors.email}</p>}
              
              <input type="tel" name="phone" id="phone" placeholder='Phone' value={formData.phone} onChange={handleChange} className='bg-gray-200 outline-none border-2 border-transparent focus:border-2 focus:border-yellow-500 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
              {validationErrors.phone && <p className="text-red-500 mt-1 mb-2">{validationErrors.phone}</p>}
              
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Your questions here...' value={formData.message} onChange={handleChange} className='bg-gray-200 outline-none border-2 border-transparent focus:border-2 focus:border-yellow-500 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
              {validationErrors.message && <p className="text-red-500 mt-1 mb-2">{validationErrors.message}</p>}
              
              <button type="submit" className='w-full bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-sm font-bold'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
