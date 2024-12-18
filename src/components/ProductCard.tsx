import React from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  image: string;
  onOrder: () => void;
}

export default function ProductCard({ name, price, description, image, onOrder }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-amber-800">${price.toFixed(2)}</span>
          <button
            onClick={onOrder}
            className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}