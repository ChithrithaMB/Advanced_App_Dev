import React from 'react';
import { Link } from 'react-router-dom';

const Termsc = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-10">
      <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-900">Terms and Conditions</h1>
        <div className="term-section bg-purple-100 rounded-lg p-6 mb-6 hover:bg-purple-200 hover:text-black focus:bg-purple-200 focus:text-white active:bg-purple-300">
          <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-lg text-gray-800">
            By accessing or using the Dreamy Delights customised gift app (the "App"), you agree to be bound by these Terms and Conditions and all applicable laws and regulations governing the App. If you do not agree with any of these terms, you are prohibited from using or accessing the App.
          </p>
        </div>
        <div className="term-section bg-blue-100 rounded-lg p-6 mb-6 hover:bg-blue-200 hover:text-black focus:bg-blue-200 focus:text-white active:bg-blue-300">
          <h2 className="text-xl font-semibold mb-4">2. Description of Services</h2>
          <p className="text-lg text-gray-800">
            The App provides users with the ability to customize and order gifts for various occasions. Users may also view their order history, manage their account settings, and contact customer support.
          </p>
        </div>
        <div className="term-section bg-green-100 rounded-lg p-6 mb-6 hover:bg-green-200 hover:text-black focus:bg-green-200 focus:text-white active:bg-green-300">
          <h2 className="text-xl font-semibold mb-4">3. User Accounts</h2>
          <p className="text-lg text-gray-800">
            In order to access certain features of the App, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>
        </div>
        <div className="term-section bg-yellow-100 rounded-lg p-6 mb-6 hover:bg-yellow-200 hover:text-black focus:bg-yellow-200 focus:text-white active:bg-yellow-300">
          <h2 className="text-xl font-semibold mb-4">4. Limitation of Liability</h2>
          <p className="text-lg text-gray-800">
            Dreamy Delights shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use the App, even if Dreamy Delights has been advised of the possibility of such damages.
          </p>
        </div>
        <p className="text-lg mb-6 text-center text-gray-800">
          If you have any questions or concerns about our Terms and Conditions, please <Link to="/contact" className="text-blue-500 hover:underline">contact us</Link>.
        </p>
      </div>
    </div>
  );
};

export default Termsc;
