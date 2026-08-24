/** Official brand colors for tech stack icons */
export const brandIconColors: Record<string, string> = {
  "fab fa-react": "#61DAFB",
  "fab fa-node-js": "#339933",
  "fab fa-js": "#F7DF1E",
  "fab fa-html5": "#E34F26",
  "fab fa-google": "#4285F4",
  "fab fa-microsoft": "#00A4EF",
  "fab fa-github": "#64748b",
  "fab fa-linkedin": "#0A66C2",
};

export function getBrandIconColor(iconName: string): string | undefined {
  return brandIconColors[iconName];
}
