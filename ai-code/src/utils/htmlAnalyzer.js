import { semanticRules, accessibilityRules, seoRules } from './validators';

export const analyzeHTML = (code) => {
  return {
    semantics: analyzeWithRules(code, semanticRules),
    accessibility: analyzeWithRules(code, accessibilityRules),
    seo: analyzeWithRules(code, seoRules)
  };
};

const analyzeWithRules = (code, rules) => {
  return rules
    .filter(rule => rule.test(code))
    .map(({ test, ...issue }) => issue);
};