import React from 'react';
export default function FoodCard({ name, price }) {
  const addToCart = () => alert(`${name} added to cart`);
  return (
    <div className="card">
      <img src="https://via.placeholder.com/200" alt={name} />
      <h3>{name}</h3>
      <p>₹{price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}