import { checkSemantics } from './analyzers/semantics';
import { checkAccessibility } from './analyzers/accessibility';
import { getRecommendations } from './analyzers/recommendations';

export function analyzeHTML(html) {
  return {
    semanticIssues: checkSemantics(html),
    accessibilityIssues: checkAccessibility(html),
    recommendations: getRecommendations()
  };
}