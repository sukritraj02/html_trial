import React from 'react';
import { FileCode2, Play } from 'lucide-react';

export function CodeInput({ value, onChange, onAnalyze }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FileCode2 className="h-5 w-5 text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-900">Input HTML</h2>
        </div>
        <button
          onClick={onAnalyze}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200"
        >
          <Play className="h-4 w-4" />
          Analyze
        </button>
      </div>
      
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-[400px] p-4 font-mono text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow resize-none"
        placeholder="<!-- Paste your HTML code here -->"
        spellCheck="false"
        aria-label="HTML input"
      />
    </div>
  );
}