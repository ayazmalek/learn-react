import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex bg-gray-800 items-center px-8 py-4 justify-between">
      <h2 className="text-xl font-bold">Bingo</h2>

      <div className="flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>

      </div>
    </div>
  );
};

export default Navbar;
