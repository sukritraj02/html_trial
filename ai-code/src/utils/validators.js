// Semantic HTML validators
export const semanticRules = [
  {
    test: (code) => /<div\s+class="(header|footer|nav|main|article)"/gi.test(code),
    type: 'semantic',
    title: 'Non-semantic HTML Usage',
    description: 'Replace div elements with semantic HTML5 elements',
    suggestion: 'Use <header>, <footer>, <nav>, <main>, or <article> instead of div with semantic class names'
  },
  {
    test: (code) => /<table[^>]*>(?![\s\S]*<th[\s>])[\s\S]*<\/table>/gi.test(code),
    type: 'semantic',
    title: 'Missing Table Headers',
    description: 'Tables should include header cells using <th> elements',
    suggestion: 'Add <th> elements within <thead> to properly label table columns'
  }
];

// Accessibility validators
export const accessibilityRules = [
  {
    test: (code) => /<img[^>]+(?!alt=)[^>]*>/gi.test(code),
    type: 'accessibility',
    title: 'Missing Alt Text',
    description: 'Images should have alternative text for screen readers',
    suggestion: 'Add alt="descriptive text" to img elements'
  },
  {
    test: (code) => /<button[^>]*>(?![\s\S]*<\/button>)[^<]*<\/button>/gi.test(code),
    type: 'accessibility',
    title: 'Empty Button Text',
    description: 'Buttons should have descriptive text content',
    suggestion: 'Add descriptive text inside button elements'
  }
];

// SEO validators
export const seoRules = [
  {
    test: (code) => !/<meta\s+name="description"/i.test(code),
    type: 'seo',
    title: 'Missing Meta Description',
    description: 'Add a meta description for better SEO',
    suggestion: '<meta name="description" content="Your page description here">'
  },
  {
    test: (code) => !/<h1[^>]*>/i.test(code),
    type: 'seo',
    title: 'Missing H1 Heading',
    description: 'Each page should have exactly one H1 heading',
    suggestion: 'Add a single <h1> element as the main heading of your page'
  }
];