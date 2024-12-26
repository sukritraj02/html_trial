import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { ResultSection } from './ResultSection';

export function AnalysisResults({ analysis }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Analysis Results</h2>
      
      <div className="space-y-8">
        <ResultSection 
          title="Semantic Suggestions"
          items={analysis.semanticIssues}
          icon={<AlertCircle className="h-5 w-5 text-amber-500" />}
          bgColor="bg-amber-50"
          borderColor="border-amber-100"
        />
        
        <ResultSection 
          title="Accessibility Issues"
          items={analysis.accessibilityIssues}
          icon={<AlertCircle className="h-5 w-5 text-red-500" />}
          bgColor="bg-red-50"
          borderColor="border-red-100"
        />
        
        <ResultSection 
          title="Recommendations"
          items={analysis.recommendations}
          icon={<CheckCircle2 className="h-5 w-5 text-green-500" />}
          bgColor="bg-green-50"
          borderColor="border-green-100"
        />
      </div>
    </div>
  );
}