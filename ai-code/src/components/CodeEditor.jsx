import { useState } from 'react';
import Editor from '@monaco-editor/react';
import ExampleCode from './ExampleCode';

function CodeEditor({ onAnalyze }) {
  const [code, setCode] = useState('');

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleAnalyzeClick = () => {
    onAnalyze(code);
  };

  const handleExampleSelect = (exampleCode) => {
    setCode(exampleCode);
  };

  return (
    <div className="w-full">
      <ExampleCode onSelect={handleExampleSelect} />
      <div className="mb-4 border rounded-lg overflow-hidden">
        <Editor
          height="400px"
          defaultLanguage="html"
          value={code}
          onChange={handleEditorChange}
          theme="vs-light"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            wordWrap: 'on'
          }}
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={handleAnalyzeClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Analyze HTML
        </button>
        <span className="text-sm text-gray-500">
          {code.length} characters
        </span>
      </div>
    </div>
  );
}

export default CodeEditor;