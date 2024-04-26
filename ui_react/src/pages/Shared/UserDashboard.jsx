
import React from "react";
import { Link } from "react-router-dom";

const gifts = [
  {
    id: 1,
    name: "Personalized Jewelry",
    theme: "Elegant",
    price: "$49.99",
    image: "https://cdn.notonthehighstreet.com/fs/4b/2a/3b0b-0af9-47c9-8ec6-555c2d0982bc/preview_sterling-silver-name-necklace.jpg",
  },
  {
    id: 2,
    name: "Customized Flower Bouquet",
    theme: "Romantic",
    price: "$39.99",
    image: "https://www.fnp.com/images/pr/m/v20230818123738/joyful-personalised-rose-bouquet.jpg",
  },
  {
    id: 3,
    name: "Engraved Wooden Watch",
    theme: "Classic",
    price: "$59.99",
    image: "https://images-cdn.ubuy.co.in/65430f46d524f0261a443c48-wastime-customized-engraved-wooden.jpg",
  },
  {
    id: 4,
    name: "Personalized Leather Wallet",
    theme: "Sophisticated",
    price: "$34.99",
    image: "https://www.incrediblegifts.in/wp-content/uploads/2022/04/Cherry-Photo-wallet.jpg",
  },
  {
    id: 5,
    name: "Customized Wine Glasses",
    theme: "Luxurious",
    price: "$29.99",
    image: "https://www.stallionbarware.com/cdn/shop/products/WhatsAppImage2022-04-14at3.11.44PM.jpg?v=1649929483",
  },
  {
    id: 6,
    name: "Monogrammed Bath Towel Set",
    theme: "Relaxing",
    price: "$49.99",
    image: "https://images.squarespace-cdn.com/content/v1/55dbcda6e4b038dd9b2bdc18/1589939500197-DM2197GOLHECTVSXC98Y/C6D093DE-A260-4165-954D-B56394FB8F1C?format=1000w",
  },
  {
    id: 7,
    name: "Personalized Chef's Apron",
    theme: "Culinary",
    price: "$24.99",
    image: "https://pinkpositiveshop.com/cdn/shop/products/personalised-rose-gold-apron-cooking-baking-gift-apron-516844_800x.jpg?v=1667768354",
  },
  {
    id: 8,
    name: "Customized Travel Journal",
    theme: "Adventure",
    price: "$19.99",
    image: "data:image/jpeg;base64,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",
  },
  {
    id: 9,
    name: "Engraved Crystal Vase",
    theme: "Elegant",
    price: "$79.99",
    image: "https://i.pinimg.com/736x/6d/ec/2b/6dec2b2287735e6be7ec65be15a566ea.jpg",
  },
  {
    id: 10,
    name: "Personalized Wooden Cutting Board",
    theme: "Homely",
    price: "$29.99",
    image: "https://www.incrediblegifts.in/wp-content/uploads/2021/02/Meals-Memories.jpg",
  },
];

const UserDashboard = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8 text-purple-800">Gifts Available</h1>
      <div className="overflow-y-auto h-96">
        <div className="grid grid-cols-3 gap-8">
          {gifts.map((gift) => (
            <div key={gift.id} className="border p-4 bg-white shadow-lg rounded-lg">
              <Link to="#" className="block">
                <img src={gift.image} alt={gift.name} className="w-full mb-4 rounded-md" />
              </Link>
              <p className="text-lg font-bold text-gray-800">{gift.name}</p>
              <p className="text-sm mb-2 text-gray-600">{gift.theme}</p>
              <p className="text-lg font-bold text-purple-700">{gift.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
