import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaHome, FaPhone, FaSignInAlt, FaGift } from 'react-icons/fa';

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      title: "Contact",
      path: "/contact",
      icon: <FaPhone />,
    },
    {
      title: "Login",
      path: "/login",
      icon: <FaSignInAlt />,
    }
  ];

  return (
    <>
      <div className='w-full bg-gray-800 flex items-center justify-center h-16 shadow-sm sticky top-0'>
        <div className='w-5/6 flex items-center justify-between text-white'>
          <h1 className='font-bold flex items-center'>
            <FaGift className="mr-2 text-yellow-400" />
            DreamyDelight
          </h1>
          <ul className='flex w-2/4 justify-evenly items-center font-bold'>
            {NavLinks.map((link, index) => (
              <li key={index} className="relative">
                <NavLink
                  to={link.path}
                  className="border-2 border-transparent p-5 flex items-center transition duration-300 hover:border-yellow-400"
                  activeClassName="border-yellow-400"
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/signup">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
