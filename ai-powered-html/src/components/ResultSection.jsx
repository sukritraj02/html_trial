import React from 'react';

export function ResultSection({ title, items, icon, bgColor, borderColor }) {
  return (
    <section>
      <h3 className="text-md font-medium text-gray-900 mb-3 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li 
            key={index} 
            className={`text-sm text-gray-600 ${bgColor} border ${borderColor} p-4 rounded-lg`}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}