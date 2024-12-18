import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../../data/products';

export default function Menu() {
  const handleOrder = (productId: number) => {
    alert(`Order placed for product ${productId}!`);
  };

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-2xl text-gray-900 mb-12 text-center">Menu</h2>
        <div className="divide-y divide-gray-100">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onOrder={() => handleOrder(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}