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
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Destaques</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureItem 
            icon={<Pen className="h-12 w-12 text-indigo-600" />}
            title="Produtos de Qualidade"
            description="Oferecemos uma ampla gama de produtos de papelaria de alta qualidade."
          />
          <FeatureItem 
            icon={<Book className="h-12 w-12 text-indigo-600" />}
            title="Designs Personalizados"
            description="Crie papelaria personalizada com nossos serviços de design sob medida."
          />
          <FeatureItem 
            icon={<Gift className="h-12 w-12 text-indigo-600" />}
            title="Kits de Presente"
            description="Conjuntos de papelaria perfeitos para todas as ocasiões."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;