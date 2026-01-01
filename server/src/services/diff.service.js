export const buildPromptFromDiff = (diff) => `
Review this GitHub PR diff and give feedback:

${diff}
`;
