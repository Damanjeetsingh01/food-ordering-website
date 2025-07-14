import React from 'react';
import Navbar from './components/Navbar';
import FoodCard from './components/FoodCard';
function App() {
  return (
    <>
      <Navbar />
      <div className="grid">
        <FoodCard name="Burger" price="99" />
        <FoodCard name="Pizza" price="199" />
        <FoodCard name="Pasta" price="149" />
      </div>
    </>
  );
}
export default App;