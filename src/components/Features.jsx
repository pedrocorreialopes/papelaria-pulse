import React from 'react';
import { Pen, Book, Gift } from 'lucide-react';

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
    {icon}
    <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>
    <p className="mt-2 text-gray-600 text-center">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureItem 
            icon={<Pen className="h-12 w-12 text-indigo-600" />}
            title="Quality Products"
            description="We offer a wide range of high-quality stationery products."
          />
          <FeatureItem 
            icon={<Book className="h-12 w-12 text-indigo-600" />}
            title="Custom Designs"
            description="Create personalized stationery with our custom design services."
          />
          <FeatureItem 
            icon={<Gift className="h-12 w-12 text-indigo-600" />}
            title="Gift Sets"
            description="Perfect stationery gift sets for all occasions."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;