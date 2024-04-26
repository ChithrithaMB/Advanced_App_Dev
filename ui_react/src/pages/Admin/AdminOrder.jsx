import React, { useState } from 'react';

const AdminOrder = () => {
  const [orders, setOrders] = useState([
    { id: 1, userId: 'user1', giftName: 'Personalized Jewelry', themeName: 'Elegant', price: '$49.99', quantity: 1 },
    { id: 2, userId: 'user4', giftName: 'Customized Flower Bouquet', themeName: 'Romantic', price: '$39.99', quantity: 2 },
    { id: 3, userId: 'user7', giftName: 'Engraved Wooden Watch', themeName: 'Classic', price: '$59.99', quantity: 1 },
  ]);

  return (
    <main className="p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Orders</h2>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-green-300">
              <th className="px-4 py-2 text-gray-800">OrderID</th>
              <th className="px-4 py-2 text-gray-800">UserID</th>
              <th className="px-4 py-2 text-gray-800">GiftName</th>
              <th className="px-4 py-2 text-gray-800">ThemeName</th>
              <th className="px-4 py-2 text-gray-800">Price</th>
              <th className="px-4 py-2 text-gray-800">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100 hover:bg-blue-200" : "bg-gray-200 hover:bg-gray-300"}>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2 text-blue-700">{order.userId}</td>
                <td className="border px-4 py-2 text-purple-700">{order.giftName}</td>
                <td className="border px-4 py-2 text-green-700">{order.themeName}</td>
                <td className="border px-4 py-2 text-red-700">{order.price}</td>
                <td className="border px-4 py-2 text-yellow-700">{order.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AdminOrder;
