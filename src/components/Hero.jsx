import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-indigo-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Welcome to Papelaria</h1>
        <p className="text-xl text-gray-600 mb-8">Discover our beautiful stationery collection</p>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-full">
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;