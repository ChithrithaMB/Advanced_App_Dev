import React from 'react';

const GiftItem = ({ image, title, description }) => {
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center justify-center">
        <div className="w-48 h-48 flex items-center justify-center">
          <div className="w-36 h-36 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <hr className="w-4/5 my-4 border-gray-300" />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  

  

// Home component
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12">
    <h1 className="text-4xl font-bold mb-8 text-black">Welcome to our Customized Gift App</h1>
    <p className="text-lg text-black mb-12">Discover the perfect gift for your loved ones.</p>
   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <GiftItem
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JkILV7-5vgf2B46mUZ6snf9SwVmy7Jb6ww&usqp=CAU"
          title="Photo Frame"
          description="Personalize memories with our beautiful photo frames."
        />
        <GiftItem
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9Dpzfy92WgWnHyZ5yF1T2ML5OETZgjuv5g&usqp=CAU"
          title="Clock"
          description="Timeless gifts to adorn any space."
        />
        <GiftItem
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnzi8199-jSdP8cpQw-g-UiqhkzGbMUO8Fw&usqp=CAU"
          title="Pen"
          description="Elegant pens for every occasion."
        />
        
      </div>
    </div>
  );
};

export default Home;
