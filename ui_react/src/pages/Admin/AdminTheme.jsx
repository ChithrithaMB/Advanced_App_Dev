import React, { useState } from 'react';

const AdminTheme = () => {
  const [giftIdeas, setGiftIdeas] = useState([
    { id: 1, theme: 'Elegant', details: 'Personalized Jewelry', price: '$49.99' },
    { id: 2, theme: 'Romantic', details: 'Customized Flower Bouquet', price: '$39.99' },
    { id: 3, theme: 'Classic', details: 'Engraved Wooden Watch', price: '$59.99' },
  ]);

  const [newGiftTheme, setNewGiftTheme] = useState('');
  const [newGiftDetails, setNewGiftDetails] = useState('');
  const [newGiftPrice, setNewGiftPrice] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleThemeChange = (event) => {
    setNewGiftTheme(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setNewGiftDetails(event.target.value);
  };

  const handlePriceChange = (event) => {
    setNewGiftPrice(event.target.value);
  };

  const handleAddGift = () => {
    if (newGiftTheme.trim() !== '' && newGiftDetails.trim() !== '' && newGiftPrice.trim() !== '') {
      setGiftIdeas([
        ...giftIdeas,
        { id: Date.now(), theme: newGiftTheme, details: newGiftDetails, price: newGiftPrice }
      ]);
      setNewGiftTheme('');
      setNewGiftDetails('');
      setNewGiftPrice('');
    }
  };

  const handleDeleteGift = (id) => {
    setGiftIdeas(giftIdeas.filter(gift => gift.id !== id));
  };

  const handleEditGift = (id) => {
    setEditingId(id);
    const giftToEdit = giftIdeas.find(gift => gift.id === id);
    setNewGiftTheme(giftToEdit.theme);
    setNewGiftDetails(giftToEdit.details);
    setNewGiftPrice(giftToEdit.price);
  };

  const handleSaveEdit = () => {
    const updatedGiftIdeas = giftIdeas.map(gift => {
      if (gift.id === editingId) {
        return {
          ...gift,
          theme: newGiftTheme,
          details: newGiftDetails,
          price: newGiftPrice
        };
      }
      return gift;
    });
    setGiftIdeas(updatedGiftIdeas);
    setEditingId(null);
    setNewGiftTheme('');
    setNewGiftDetails('');
    setNewGiftPrice('');
  };

  return (
    <main className="p-4">
      <div className="bg-grey-400 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">ADMIN THEME</h2>
        <div className="mb-4">
          <input
            type="text"
            className="border rounded-md p-2 mr-2"
            placeholder="Enter theme"
            value={newGiftTheme}
            onChange={handleThemeChange}
          />
          <input
            type="text"
            className="border rounded-md p-2 mr-2"
            placeholder="Enter details"
            value={newGiftDetails}
            onChange={handleDetailsChange}
          />
          <input
            type="text"
            className="border rounded-md p-2 mr-2"
            placeholder="Enter price"
            value={newGiftPrice}
            onChange={handlePriceChange}
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
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Theme</th>
              <th className="px-4 py-2">Details</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {giftIdeas.map(gift => (
              <tr key={gift.id} className="hover:bg-blue-100">
                <td className="border px-4 py-2">{gift.theme}</td>
                <td className="border px-4 py-2">{gift.details}</td>
                <td className="border px-4 py-2">{gift.price}</td>
                <td className="border px-4 py-2">
                  {editingId === gift.id ? (
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                      onClick={handleSaveEdit}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                      onClick={() => handleEditGift(gift.id)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleDeleteGift(gift.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AdminTheme;
