import React, { useState } from 'react';
import { Header } from './components/Header';
import { CodeInput } from './components/CodeInput';
import { AnalysisResults } from './components/AnalysisResults';
import { Features } from './components/Features';
import { analyzeHTML } from './utils/htmlAnalyzer';

export default function App() {
  const [htmlInput, setHtmlInput] = useState('');
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyze = () => {
    const results = analyzeHTML(htmlInput);
    setAnalysis(results);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <Features />
        
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <CodeInput 
            value={htmlInput}
            onChange={setHtmlInput}
            onAnalyze={handleAnalyze}
          />
          
          {analysis && <AnalysisResults analysis={analysis} />}
        </div>
      </main>
    </div>
  );
}