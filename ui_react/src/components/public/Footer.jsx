import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h5 className="text-lg font-bold">About Dreamy Delights</h5>
            <p className="mt-2">A one-stop destination for delightful gifts to make every occasion special.</p>
          </div>
          <div>
            <h5 className="text-lg font-bold">Contact Us</h5>
            <p className="mt-2">Email: dreamydelights@gmail.com</p>
            <p>Phone: +91 9876859234</p>
          </div>
          <div>
            <h5 className="text-lg font-bold">Social Media</h5>
            <ul className="mt-2 flex gap-10">
              <li><FaFacebook className='text-blue-500 cursor-pointer' onClick={() => window.location.href = 'https://www.facebook.com'} /></li>
              <li><FaTwitter className='text-sky-500 cursor-pointer' onClick={() => window.location.href = 'https://x.com'} /></li>
              <li><FaYoutube className='text-red-500 cursor-pointer' onClick={() => window.location.href = 'https://www.youtube.com'} /></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold">Quick Links</h5>
            <ul className="mt-2">
              <li><Link to="/faq" className="text-blue-300 hover:text-blue-500">FAQ</Link></li>
              <li><Link to="/terms" className="text-blue-300 hover:text-blue-500">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-blue-300 hover:text-blue-500">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-3 bg-gray-900">
        <p className="text-white">&copy; {new Date().getFullYear()} Dreamy Delights Gift App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
