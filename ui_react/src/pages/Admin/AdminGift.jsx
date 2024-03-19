import React, { useState } from 'react';

const AdminGift = () => {
  const [giftIdeas, setGiftIdeas] = useState([
    { id: 1, name: 'Personalized Jewelry', image: 'https://cdn.notonthehighstreet.com/fs/4b/2a/3b0b-0af9-47c9-8ec6-555c2d0982bc/preview_sterling-silver-name-necklace.jpg', price: '$49.99', theme: 'Elegant' },
    { id: 2, name: 'Customized Flower Bouquet', image: 'https://www.fnp.com/images/pr/m/v20230818123738/joyful-personalised-rose-bouquet.jpg', price: '$39.99', theme: 'Romantic' },
   
  ]);

  const [newGiftName, setNewGiftName] = useState('');
  const [newGiftImage, setNewGiftImage] = useState('');
  const [newGiftPrice, setNewGiftPrice] = useState('');
  const [newGiftTheme, setNewGiftTheme] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleNameChange = (event) => {
    setNewGiftName(event.target.value);
  };

  const handleImageChange = (event) => {
    setNewGiftImage(event.target.value);
  };

  const handlePriceChange = (event) => {
    setNewGiftPrice(event.target.value);
  };

  const handleThemeChange = (event) => {
    setNewGiftTheme(event.target.value);
  };

  const handleAddGift = () => {
    if (newGiftName.trim() !== '' && newGiftImage.trim() !== '' && newGiftPrice.trim() !== '' && newGiftTheme.trim() !== '') {
      setGiftIdeas([
        ...giftIdeas,
        { id: Date.now(), name: newGiftName, image: newGiftImage, price: newGiftPrice, theme: newGiftTheme }
      ]);
      setNewGiftName('');
      setNewGiftImage('');
      setNewGiftPrice('');
      setNewGiftTheme('');
    }
  };

  const handleDeleteGift = (id) => {
    setGiftIdeas(giftIdeas.filter(gift => gift.id !== id));
  };

  const handleEditGift = (id) => {
    setEditingId(id);
    const giftToEdit = giftIdeas.find(gift => gift.id === id);
    setNewGiftName(giftToEdit.name);
    setNewGiftImage(giftToEdit.image);
    setNewGiftPrice(giftToEdit.price);
    setNewGiftTheme(giftToEdit.theme);
  };

  const handleSaveEdit = () => {
    const updatedGiftIdeas = giftIdeas.map(gift => {
      if (gift.id === editingId) {
        return {
          ...gift,
          name: newGiftName,
          image: newGiftImage,
          price: newGiftPrice,
          theme: newGiftTheme
        };
      }
      return gift;
    });
    setGiftIdeas(updatedGiftIdeas);
    setEditingId(null);
    setNewGiftName('');
    setNewGiftImage('');
    setNewGiftPrice('');
    setNewGiftTheme('');
  };

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">ADMIN GIFT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {giftIdeas.map(gift => (
            <div key={gift.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <img src={gift.image} alt={gift.name} className="w-full h-48 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{gift.name}</h3>
                <p className="text-gray-600 mb-2">Price: {gift.price}</p>
                <p className="text-gray-600">Theme: {gift.theme}</p>
                <div className="flex justify-between mt-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                    onClick={() => handleEditGift(gift.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                    onClick={() => handleDeleteGift(gift.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <input
            type="text"
            className="border rounded-md p-2 mr-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter new gift idea"
            value={newGiftName}
            onChange={handleNameChange}
          />
          <input
            type="text"
            className="border rounded-md p-2 mr-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter image URL"
            value={newGiftImage}
            onChange={handleImageChange}
          />
          <input
            type="text"
            className="border rounded-md p-2 mr-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter price"
            value={newGiftPrice}
            onChange={handlePriceChange}
          />
          <input
            type="text"
            className="border rounded-md p-2 mr-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter theme"
            value={newGiftTheme}
            onChange={handleThemeChange}
          />
          {editingId !== null ? (
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
              onClick={handleSaveEdit}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
              onClick={handleAddGift}
            >
              Add Gift
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default AdminGift;
