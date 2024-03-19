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
        <h2 className="text-xl font-bold mb-4 text-indigo-700">Orders</h2>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-indigo-500 text-white">
              <th className="px-4 py-2">OrderID</th>
              <th className="px-4 py-2">UserID</th>
              <th className="px-4 py-2">GiftName</th>
              <th className="px-4 py-2">ThemeName</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100 text-gray-800 hover:bg-indigo-200" : "bg-gray-200 text-gray-800 hover:bg-indigo-200"}>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{order.userId}</td>
                <td className="border px-4 py-2">{order.giftName}</td>
                <td className="border px-4 py-2">{order.themeName}</td>
                <td className="border px-4 py-2">{order.price}</td>
                <td className="border px-4 py-2">{order.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AdminOrder;
