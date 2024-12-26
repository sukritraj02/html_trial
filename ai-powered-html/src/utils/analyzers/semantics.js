export function checkSemantics(html) {
  const issues = [];

  // Check for non-semantic div usage
  if (countTags(html, 'div') > countSemanticTags(html)) {
    issues.push(
      "Consider using semantic elements like <article>, <section>, <main> instead of generic <div> elements"
    );
  }

  // Check for proper heading hierarchy
  if (!html.includes('<h1')) {
    issues.push(
      "Add an <h1> element as the main heading of your page"
    );
  }

  return issues;
}

function countTags(html, tag) {
  const regex = new RegExp(`<${tag}`, 'g');
  return (html.match(regex) || []).length;
}

function countSemanticTags(html) {
  const semanticTags = ['article', 'section', 'main', 'header', 'footer', 'nav', 'aside'];
  return semanticTags.reduce((count, tag) => count + countTags(html, tag), 0);
}