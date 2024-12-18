import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Classic Espresso",
    price: 3.99,
    description: "Rich and bold single-shot espresso",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    name: "Cappuccino",
    price: 4.99,
    description: "Espresso topped with foamy milk and chocolate",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    name: "Caramel Macchiato",
    price: 5.49,
    description: "Espresso with steamed milk and caramel drizzle",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 4,
    name: "Cold Brew",
    price: 4.49,
    description: "Smooth, cold-steeped coffee served over ice",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

export default function Menu() {
  const handleOrder = (productId: number) => {
    alert(`Order placed for product ${productId}!`);
    // Here you would typically integrate with a payment processor
  };

  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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