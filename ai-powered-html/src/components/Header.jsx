import React from 'react';
import { Code2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-500 rounded-xl">
              <Code2 className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">HTML Analyzer</h1>
              <p className="text-gray-300 mt-1">Improve your HTML semantics and accessibility</p>
            </div>
          </div>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </header>
  );
}