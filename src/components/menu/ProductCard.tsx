import React from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  onOrder: () => void;
}

export default function ProductCard({ name, price, description, onOrder }: ProductCardProps) {
  return (
    <div className="border-b border-gray-100 py-6 first:pt-0 last:border-0">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-lg text-gray-900 mb-1">{name}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-900">${price.toFixed(2)}</span>
          <button
            onClick={onOrder}
            className="border border-gray-900 text-gray-900 px-4 py-1 text-sm hover:bg-gray-900 hover:text-white transition"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
}