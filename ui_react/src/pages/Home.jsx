import React from 'react';

const GiftItem = ({ image, title, description }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center justify-center p-6 transform hover:scale-105">
      <div className="w-48 h-48 flex items-center justify-center">
        <div className="w-36 h-36 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
      <hr className="w-full my-4 border-gray-300" />
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gradient-to-r from-blue-300 to-green-300">
      <h1 className="text-4xl font-bold mb-8 text-black">Welcome to Our Customized Gift App</h1>
      <p className="text-lg text-black mb-12">Discover the perfect gift that captures cherished moments.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        <GiftItem
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JkILV7-5vgf2B46mUZ6snf9SwVmy7Jb6ww&usqp=CAU"
          title="Personalized Photo Frame"
          description="Treasure special memories with our beautifully crafted and personalized photo frames."
        />
        <GiftItem
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9Dpzfy92WgWnHyZ5yF1T2ML5OETZgjuv5g&usqp=CAU"
          title="Elegant Clocks"
          description="Elevate any space with timeless elegance using our exquisite collection of clocks."
        />
        <GiftItem
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnzi8199-jSdP8cpQw-g-UiqhkzGbMUO8Fw&usqp=CAU"
          title="Sophisticated Pens"
          description="Make a lasting impression with our range of sophisticated pens for every occasion."
        />
        {/* Add more GiftItem components for additional gifts */}
      </div>
    </div>
  );
};

export default Home;
