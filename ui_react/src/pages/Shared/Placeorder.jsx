import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Placeorder = () => {
  const [formData, setFormData] = useState({
    name: '',
    orderDate: '',
    address: '',
    phone: '',
    email: '',
    selectedGift: '',
    selectedTheme: ''
  });

  const { name, orderDate, address, phone, email, selectedGift, selectedTheme } = formData;

  const giftOptions = [
    { name: 'Chocolate Assortment', price: '$25' },
    { name: 'Flower Bouquet', price: '$30' },
    { name: 'Gourmet Gift Basket', price: '$50' },
    { name: 'Personalized Mug', price: '$15' },
    { name: 'Spa Gift Set', price: '$40' },
    { name: 'Wine and Cheese Hamper', price: '$60' },
    { name: 'Teddy Bear', price: '$20' },
    { name: 'Customized Cake', price: '$35' },
    { name: 'Fruit Basket', price: '$45' },
    { name: 'Scented Candle Set', price: '$18' },
  ];

  const themeOptions = [
    'Classic Romance',
    'Rustic Charm',
    'Modern Elegance',
    'Bohemian Chic',
    'Vintage Glam',
    'Tropical Paradise',
    'Minimalist Zen',
    'Whimsical Wonderland',
    'Nautical Adventure',
    'Enchanted Forest',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted!');
    
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 py-8 h-screen overflow-y-auto">
      <h1 className="text-3xl font-semibold mb-4">Place Your Order</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Your Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="orderDate" className="block text-gray-700 text-sm font-bold mb-2">Order Date</label>
          <input
            type="date"
            id="orderDate"
            name="orderDate"
            value={orderDate}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={handleChange}
            placeholder="Your Address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Your Email Address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gift" className="block text-gray-700 text-sm font-bold mb-2">Select Gift</label>
          <select
            id="gift"
            name="selectedGift"
            value={selectedGift}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Gift</option>
            {giftOptions.map((gift, index) => (
              <option key={index} value={gift.name}>
                {gift.name} - {gift.price}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="theme" className="block text-gray-700 text-sm font-bold mb-2">Select Theme</label>
          <select
            id="theme"
            name="selectedTheme"
            value={selectedTheme}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Theme</option>
            {themeOptions.map((theme, index) => (
              <option key={index} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Place Order
          </button>
        </div>
      </form>
      
      {Object.keys(formData).length !== 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Order Details</h2>
          <table className="table-auto border-collapse border border-green-800">
            <tbody>
              <tr>
                <td className="border border-green-600 px-4 py-2"><strong>Name:</strong></td>
                <td className="border border-green-600 px-4 py-2">{name}</td>
              </tr>
              <tr>
                <td className="border border-green-600 px-4 py-2"><strong>Order Date:</strong></td>
                <td className="border border-green-600 px-4 py-2">{orderDate}</td>
              </tr>
              <tr>
                <td className="border border-green-600 px-4 py-2"><strong>Address:</strong></td>
                <td className="border border-green-600 px-4 py-2">{address}</td>
              </tr>
              <tr>
                <td className="border border-green-600 px-4 py-2"><strong>Phone:</strong></td>
                <td className="border border-green-600 px-4 py-2">{phone}</td>
              </tr>
              <tr>
                <td className="border border-green-600 px-4 py-2"><strong>Email:</strong></td>
                <td className="border border-green-600 px-4 py-2">{email}</td>
              </tr>
              <tr>
                <td className="border border-green-600 px-4 py-2"><strong>Selected Gift:</strong></td>
                <td className="border border-green-600 px-4 py-2">{selectedGift}</td>
              </tr>
              <tr>
                <td className="border border-green-600 px-4 py-2"><strong>Selected Theme:</strong></td>
                <td className="border border-green-600 px-4 py-2">{selectedTheme}</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4">
            <Link to="/user/payorder">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2">
                Pay
              </button>
            </Link>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default Placeorder;
