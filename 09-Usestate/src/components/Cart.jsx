import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <button onClick={() => addItem({ id: 1, name: "Laptop" })}>
        Add Laptop
      </button>

      <button onClick={() => addItem({ id: 2, name: "Mouse" })}>
        Add Mouse
      </button>

      {cart.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>

          <button onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;