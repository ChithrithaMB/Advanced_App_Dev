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
      // Send the form data or perform any other actions here
      // For demonstration purposes, we'll just set the message sent state to true
      setMessageSent(true);
      // Reset form data and message sent state after 3 seconds
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
    <div className="container mx-auto py-8 h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      {messageSent && (
        <div className="bg-green-500 text-white text-center py-2 mb-4">
          Message has been sent!
        </div>
      )}
      <div className='h-full flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full md:w-1/4 flex flex-col h-1/2 md:h-[60vh] justify-evenly items-center mb-4 md:mb-0'>
          {/* Email */}
          <div className='h-1/4 w-3/4 bg-blue-500 hover:bg-blue-600 flex flex-col justify-center items-center p-2 rounded-md shadow-md gap-2'>
            <p className='font-bold text-white'>
              <FaEnvelope size={32} />
            </p>
            <h3 className='font-semibold text-white'>
              dreamydelights@gmail.com
            </h3>
          </div>
          {/* Phone */}
          <div className='h-1/4 w-3/4 bg-blue-500 hover:bg-blue-600 flex flex-col justify-center items-center p-2 rounded-md shadow-md gap-2'>
            <p className='font-bold text-white'>
              <FaPhoneAlt size={32} />
            </p>
            <h3 className='font-semibold text-white'>
              +91 9876859234
            </h3>
          </div>
          {/* Address */}
          <div className='h-2/5 w-4/5 bg-blue-500 hover:bg-blue-600 flex flex-col justify-center items-center p-2 rounded-md shadow-md gap-2'>
            <p className='font-bold text-white'>
              <FaMapMarkerAlt size={32} />
            </p>
            <h3 className='font-semibold text-white'>
              Dreamy Delights Address
              123, Nehru Street, Bengaluru, Karnataka.
            </h3>
          </div>
        </div>
        {/* Contact Form */}
        <div className='w-full md:w-2/4 flex flex-col h-max justify-center items-center'>
          <div className="container mx-auto">
            <form onSubmit={handleSubmit} className='w-full md:w-3/4 flex justify-between items-center flex-col gap-4'>
              {/* Name */}
              <input type="text" name="name" id="name" placeholder='Name' value={formData.name} onChange={handleChange} className='bg-gray-200 outline-none border-2 border-transparent focus:border-2 focus:border-blue-500 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
              {validationErrors.name && <p className="text-red-500">{validationErrors.name}</p>}
              {/* Email */}
              <input type="email" name="email" id="email" placeholder='Email' value={formData.email} onChange={handleChange} className='bg-gray-200 outline-none border-2 border-transparent focus:border-2 focus:border-blue-500 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
              {validationErrors.email && <p className="text-red-500">{validationErrors.email}</p>}
              {/* Phone */}
              <input type="tel" name="phone" id="phone" placeholder='Phone' value={formData.phone} onChange={handleChange} className='bg-gray-200 outline-none border-2 border-transparent focus:border-2 focus:border-blue-500 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
              {validationErrors.phone && <p className="text-red-500">{validationErrors.phone}</p>}
              {/* Message */}
              <textarea name="message" id="message" cols="30" rows="10" placeholder='Your questions here...' value={formData.message} onChange={handleChange} className='bg-gray-200 outline-none border-2 border-transparent focus:border-2 focus:border-blue-500 rounded-sm w-full text-black placeholder:text-black p-2 shadow-sm' />
              {validationErrors.message && <p className="text-red-500">{validationErrors.message}</p>}
              {/* Submit Button */}
              <button type="submit" className='w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-sm font-bold'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
