import React from 'react';
import { Link } from 'react-router-dom';
import { RiGift2Line, RiPaletteLine, RiFileList2Line, RiHistoryLine, RiLogoutBoxLine, RiDashboardLine, RiSettings3Line, RiEarthLine } from 'react-icons/ri'; // Importing the required icons

class AdminLeftbar extends React.Component {
  render() {
    const { logout, settings } = this.props; 

    return (
      <div className="left-sidebar bg-gray-800 text-white w-48 py-6 px-4">
        <Link to="/admin/dashboard" className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
          <RiDashboardLine className="inline-block mr-2" />
          Dashboard
        </Link>
        <Link to="/admin/gift" className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
          <RiGift2Line className="inline-block mr-2" />
          Gift
        </Link>
        <Link to="/admin/theme" className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
          <RiPaletteLine className="inline-block mr-2" />
          Theme
        </Link>
        <Link to="/admin/order" className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
          <RiFileList2Line className="inline-block mr-2" />
          View Order
        </Link>
        <Link to="/admin/pay" className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
          <RiHistoryLine className="inline-block mr-2" />
          Payment History
        </Link>
        <Link to="/admin/config" className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
              <RiEarthLine className="inline-block mr-2" /> {/* Changed icon to RiSettings3Line */}
              Config
        </Link>
       <Link to="/admin/setting" className="block w-full text-left py-2 px-4 rounded hover:bg-gray-700 hover:text-white transition duration-300 mb-4 border-b border-gray-600">
              <RiSettings3Line className="inline-block mr-2" /> {/* Changed icon to RiSettings3Line */}
              Settings
               </Link>
        
        <div className="flex flex-col justify-between h-full">
          <div> 
          <Link to="/">
            <button onClick={logout} className="bg-red-500 block w-full text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">
              <RiLogoutBoxLine className="inline-block mr-2" />
              Logout
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLeftbar;
