export function checkAccessibility(html) {
  const issues = [];

  // Check for images without alt text
  if (/<img[^>]+(?!alt=)[^>]*>/g.test(html)) {
    issues.push(
      "Images must have alt attributes for accessibility"
    );
  }

  // Check for form accessibility
  if (html.includes('<input') && !html.includes('<label')) {
    issues.push(
      "Form inputs should be associated with label elements"
    );
  }

  return issues;
}