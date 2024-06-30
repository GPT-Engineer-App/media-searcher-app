import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between p-4 bg-gray-800 text-white">
      <div className="flex space-x-4">
        <Link to="/">
          <Button variant="ghost" className="text-white">Home</Button>
        </Link>
        <Link to="/search">
          <Button variant="ghost" className="text-white">Search</Button>
        </Link>
        <Link to="/about">
          <Button variant="ghost" className="text-white">About</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;