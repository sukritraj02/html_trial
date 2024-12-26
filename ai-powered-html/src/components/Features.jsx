import React from 'react';
import { Zap, Shield, Search } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-6 w-6" />,
    title: 'Semantic Analysis',
    description: 'Get insights on HTML structure and tag usage'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Accessibility Check',
    description: 'Ensure your HTML is accessible to everyone'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Best Practices',
    description: 'Receive recommendations for modern web standards'
  }
];

export function Features() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}