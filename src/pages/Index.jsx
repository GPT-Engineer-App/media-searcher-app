import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl text-center">Welcome to Media Finder</h1>
      <p className="text-center">
        Find your favorite songs, videos, and more using voice or text input.
      </p>
      <div className="space-x-4">
        <Link to="/search">
          <Button variant="outline">Start Searching</Button>
        </Link>
        <Link to="/about">
          <Button variant="outline">About Us</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;