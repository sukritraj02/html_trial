import { useState } from 'react';

function AnalysisResults({ results }) {
  const [activeTab, setActiveTab] = useState('all');
  
  if (!results) return null;
  
  const allIssues = [
    ...(results.semantics || []),
    ...(results.accessibility || []),
    ...(results.seo || [])
  ];
  
  const filteredIssues = activeTab === 'all' 
    ? allIssues 
    : allIssues.filter(issue => issue.type === activeTab);

  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Analysis Results</h2>
      
      <div className="flex space-x-2 mb-4">
        {['all', 'semantic', 'accessibility', 'seo'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab 
                ? 'bg-blue-500 text-white' 
                : 'bg-white text-gray-700'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredIssues.map((issue, index) => (
          <div key={index} className="p-4 bg-white rounded shadow">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{issue.title}</h3>
              <span className={`px-2 py-1 rounded text-sm ${
                issue.type === 'semantic' ? 'bg-green-100 text-green-800' :
                issue.type === 'accessibility' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {issue.type}
              </span>
            </div>
            <p className="text-gray-600 mt-2">{issue.description}</p>
            {issue.suggestion && (
              <pre className="mt-2 p-2 bg-gray-50 rounded text-sm">
                <code>{issue.suggestion}</code>
              </pre>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnalysisResults;