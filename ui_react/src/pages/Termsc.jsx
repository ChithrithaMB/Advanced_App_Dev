import React from 'react';
import { Link } from 'react-router-dom';

const Termsc = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-10">
      <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <div className="term-section bg-gradient-to-b from-purple-200 to-purple-300 rounded-lg p-6 mb-6 hover:bg-purple-300 hover:text-white focus:bg-purple-300 focus:text-white active:bg-purple-400">
          <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-lg">
            By accessing or using the Dreamy Delights customised gift app (the "App"), you agree to be bound by these Terms and Conditions and all applicable laws and regulations governing the App. If you do not agree with any of these terms, you are prohibited from using or accessing the App.
          </p>
        </div>
        <div className="term-section bg-gradient-to-b from-blue-200 to-blue-300 rounded-lg p-6 mb-6 hover:bg-blue-300 hover:text-white focus:bg-blue-300 focus:text-white active:bg-blue-400">
          <h2 className="text-xl font-semibold mb-4">2. Description of Services</h2>
          <p className="text-lg">
            The App provides users with the ability to customize and order gifts for various occasions. Users may also view their order history, manage their account settings, and contact customer support.
          </p>
        </div>
        <div className="term-section bg-gradient-to-b from-green-200 to-green-300 rounded-lg p-6 mb-6 hover:bg-green-300 hover:text-white focus:bg-green-300 focus:text-white active:bg-green-400">
          <h2 className="text-xl font-semibold mb-4">3. User Accounts</h2>
          <p className="text-lg">
            In order to access certain features of the App, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>
        </div>
        <div className="term-section bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-lg p-6 mb-6 hover:bg-yellow-300 hover:text-white focus:bg-yellow-300 focus:text-white active:bg-yellow-400">
          <h2 className="text-xl font-semibold mb-4">4. Limitation of Liability</h2>
          <p className="text-lg">
            Dreamy Delights shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use the App, even if Dreamy Delights has been advised of the possibility of such damages.
          </p>
        </div>
        <p className="text-lg mb-6">
          If you have any questions or concerns about our Terms and Conditions, please <Link to="/contact" className="text-blue-500 hover:underline">contact us</Link>.
        </p>
      </div>
    </div>
  );
};

export default Termsc;
