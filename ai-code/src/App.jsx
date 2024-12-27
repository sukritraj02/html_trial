import { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import AnalysisResults from './components/AnalysisResults';
import { analyzeHTML } from './utils/htmlAnalyzer';

function App() {
  const [analysisResults, setAnalysisResults] = useState(null);

  const handleAnalyze = async (code) => {
    const results = analyzeHTML(code);
    setAnalysisResults(results);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">HTML Analyzer</h1>
          <p className="text-gray-600 mt-2">
            Analyze and improve your HTML code for better semantics, accessibility, and SEO
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <CodeEditor onAnalyze={handleAnalyze} />
          <AnalysisResults results={analysisResults} />
        </main>
      </div>
    </div>
  );
}

export default App;