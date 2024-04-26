import React from 'react';

const Myorder = () => {
  const orders = [
    { id: 1, date: '2024-03-17', total: 25.99, status: 'Delivered' },
    { id: 2, date: '2024-03-16', total: 35.50, status: 'Processing' },
    { id: 3, date: '2024-03-15', total: 19.95, status: 'Cancelled' },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {orders.map(order => (
          <div key={order.id}>
            <div className="border rounded-lg p-4 transition duration-300 hover:border-gray-800">
              <h2 className="text-xl font-semibold mb-2">Order Name: Photo Frame{order.id}</h2>
              <p className="text-gray-600 mb-2">Date: {order.date}</p>
              <p className="text-gray-600 mb-2">Total: ${order.total}</p>
              <p className={`text-lg font-semibold ${
                order.status === 'Delivered'
                  ? 'text-green-600'
                  : order.status === 'Processing'
                  ? 'text-blue-600'
                  : 'text-red-600'
              }`}>
                Status: {order.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myorder;
