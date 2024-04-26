import React, { useState } from 'react';

const AdminGift = () => {
  const [giftIdeas, setGiftIdeas] = useState([
    { id: 1, name: 'Personalized Jewelry', image: 'https://cdn.notonthehighstreet.com/fs/4b/2a/3b0b-0af9-47c9-8ec6-555c2d0982bc/preview_sterling-silver-name-necklace.jpg', price: '$49.99', theme: 'Elegant' },
    { id: 2, name: 'Customized Flower Bouquet', image: 'https://www.fnp.com/images/pr/m/v20230818123738/joyful-personalised-rose-bouquet.jpg', price: '$39.99', theme: 'Romantic' },
    { id: 3, name: 'Engraved Wooden Watch', image: 'https://images-cdn.ubuy.co.in/65430f46d524f0261a443c48-wastime-customized-engraved-wooden.jpg', price: '$59.99', theme: 'Classic' },
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
    <main className="p-4">
      <div className="bg-grey-400 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">ADMIN GIFT</h2>
        <div className="mb-4">
          <input
            type="text"
            className="border rounded-md p-2 mr-2"
            placeholder="Enter new gift idea"
            value={newGiftName}
            onChange={handleNameChange}
          />
          <input
            type="text"
            className="border rounded-md p-2 mr-2"
            placeholder="Enter image URL"
            value={newGiftImage}
            onChange={handleImageChange}
          />
          <input
            type="text"
            className="border rounded-md p-2 mr-2"
            placeholder="Enter price"
            value={newGiftPrice}
            onChange={handlePriceChange}
          />
          <input
            type="text"
            className="border rounded-md p-2 mr-2"
            placeholder="Enter theme"
            value={newGiftTheme}
            onChange={handleThemeChange}
          />
          {editingId !== null ? (
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSaveEdit}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleAddGift}
            >
              Add Gift
            </button>
          )}
        </div>
        <ul>
          {giftIdeas.map(gift => (
            <li key={gift.id} className="mb-4 flex items-center hover:bg-blue-100 p-2 rounded">
              <img src={gift.image} alt={gift.name} className="w-12 h-12 mr-4" />
              {editingId === gift.id ? (
                <div>
                  <input
                    type="text"
                    className="border rounded-md p-2 mr-2 border-blue-500"
                    value={newGiftName}
                    onChange={handleNameChange}
                  />
                  <input
                    type="text"
                    className="border rounded-md p-2 mr-2 border-blue-500"
                    value={newGiftImage}
                    onChange={handleImageChange}
                  />
                  <input
                    type="text"
                    className="border rounded-md p-2 mr-2 border-blue-500"
                    value={newGiftPrice}
                    onChange={handlePriceChange}
                  />
                  <input
                    type="text"
                    className="border rounded-md p-2 mr-2 border-blue-500"
                    value={newGiftTheme}
                    onChange={handleThemeChange}
                  />
                </div>
              ) : (
                <div>
                  <span className="text-blue-500">{gift.name}</span>
                  <p className="text-sm text-green-500">{gift.price}</p>
                  <p className="text-sm text-red-500">{gift.theme}</p>
                </div>
              )}
              <div>
                {editingId === gift.id ? (
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                    onClick={handleSaveEdit}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleEditGift(gift.id)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => handleDeleteGift(gift.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default AdminGift;
