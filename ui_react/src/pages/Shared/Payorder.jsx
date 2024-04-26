import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

const Payorder = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentDetails, setPaymentDetails] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const { cardholderName, cardNumber, expiryDate, cvv } = paymentDetails;

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  
  const handlePayment = () => {
    
    console.log('Payment processed successfully!');
    
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Payment Page</h1>
      <p className="mb-4">Please select a payment method:</p>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Payment Method</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="card"
            name="paymentMethod"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={() => setPaymentMethod('card')}
            className="mr-2"
          />
          <label htmlFor="card" className="mr-4">Card</label>
          <input
            type="radio"
            id="gpay"
            name="paymentMethod"
            value="gpay"
            checked={paymentMethod === 'gpay'}
            onChange={() => setPaymentMethod('gpay')}
            className="mr-2"
          />
          <label htmlFor="gpay">Google Pay</label>
        </div>
      </div>
      {paymentMethod === 'card' ? (
        <>
          <div className="mb-6">
            <label htmlFor="cardholderName" className="block text-gray-700 text-sm font-bold mb-2">Cardholder Name</label>
            <input
              type="text"
              id="cardholderName"
              name="cardholderName"
              value={cardholderName}
              onChange={handleChange}
              placeholder="Enter cardholder's name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="cardNumber" className="block text-gray-700 text-sm font-bold mb-2">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardNumber}
              onChange={handleChange}
              placeholder="Enter your card number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="expiryDate" className="block text-gray-700 text-sm font-bold mb-2">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-gray-700 text-sm font-bold mb-2">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={cvv}
                onChange={handleChange}
                placeholder="CVV"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>
        </>
      ) : (
        <div className="mb-6">
          <p className="text-gray-700 text-sm font-bold mb-2">Please make the payment to the following Google Pay number:</p>
          <p className="text-2xl text-green-500 font-semibold">+91 9897654323</p>
        </div>
      )}
      <div className="flex items-center justify-center mb-8">
        <button
          onClick={handlePayment}
          className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
        >
          <FiCheckCircle className="mr-2" /> Pay Now
        </button>
        <Link to="/user/placeorder">
          <button className="flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            <FiXCircle className="mr-2" /> Cancel Order
          </button>
        </Link>
      </div>
      {paymentMethod === 'card' && (
        <div className="text-center text-gray-600">
          <p>Accepted Payment Methods:</p>
          <div className="flex justify-center mt-2">
            <img src="data:image/png;base64,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" alt="Google Pay" className="w-12 mx-2" />
            <img src="data:image/jpeg;base64,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" alt="Credit" className="w-12 mx-2" />
            <img src="data:image/jpeg;base64,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" alt="Debit" className="w-12 mx-2" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Payorder;
