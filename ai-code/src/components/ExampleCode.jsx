import React from 'react';

const examples = {
  basic: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sample Page</title>
</head>
<body>
  <div class="header">
    <h1>Welcome</h1>
  </div>
  <div class="nav">
    <a href="#">Home</a>
    <a href="#">About</a>
  </div>
  <img src="logo.png">
  <button></button>
</body>
</html>`,
  semantic: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="description" content="A well-structured page">
  <title>Better Sample Page</title>
</head>
<body>
  <header>
    <h1>Welcome</h1>
  </header>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
  </nav>
  <img src="logo.png" alt="Company Logo">
  <button>Click me</button>
</body>
</html>`
};

function ExampleCode({ onSelect }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Example Code</h3>
      <div className="flex space-x-2">
        <button
          onClick={() => onSelect(examples.basic)}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Basic Example
        </button>
        <button
          onClick={() => onSelect(examples.semantic)}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Semantic Example
        </button>
      </div>
    </div>
  );
}

export default ExampleCode;