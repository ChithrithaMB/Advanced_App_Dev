import React, { useState } from 'react';

const AdminPayment = () => {
  const [orders, setOrders] = useState([
    { id: 1, userId: 'user1', status: 'Pending', totalAmount: '$49.99', paymentDate: '2024-03-18', modeOfPayment: 'Credit Card' },
    { id: 2, userId: 'user4', status: 'Completed', totalAmount: '$39.99', paymentDate: '2024-03-17', modeOfPayment: 'PayPal' },
    { id: 3, userId: 'user7', status: 'Pending', totalAmount: '$59.99', paymentDate: '2024-03-16', modeOfPayment: 'Cash on Delivery' },
  ]);

  return (
    <main className="p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Orders</h2>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-blue-500">
              <th className="px-4 py-2 text-gray-800">PaymentID</th>
              <th className="px-4 py-2 text-gray-800">UserID</th>
              <th className="px-4 py-2 text-gray-800">Status</th>
              <th className="px-4 py-2 text-gray-800">TotalAmount</th>
              <th className="px-4 py-2 text-gray-800">PaymentDate</th>
              <th className="px-4 py-2 text-gray-800">ModeofPayment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100 hover:bg-blue-200" : "bg-gray-200 hover:bg-gray-300"}>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2 text-blue-700">{order.userId}</td>
                <td className={`border px-4 py-2 ${order.status === 'Completed' ? 'text-green-700' : 'text-red-700'}`}>{order.status}</td>
                <td className="border px-4 py-2 text-red-700">{order.totalAmount}</td>
                <td className="border px-4 py-2 text-gray-700">{order.paymentDate}</td>
                <td className="border px-4 py-2 text-purple-700">{order.modeOfPayment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AdminPayment;
