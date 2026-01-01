export const githubLogin = (req, res) => {
  // Redirect user to GitHub OAuth page
  const redirectUri = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`;
  res.redirect(redirectUri);
};

export const githubCallback = async (req, res) => {
  // Normally exchange code for token (simplified here)
  res.redirect("http://localhost:3000/dashboard");
};

export const getCurrentUser = (req, res) => {
  // Temporary mock user
  res.json({
    username: "demo-user",
    loggedIn: true
  });
};
