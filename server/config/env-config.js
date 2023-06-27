require("dotenv").config();
const env_config = {
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  githubClientId: process.env.GITHUB_CLIENT_ID,
  githubSecret: process.env.GITHUB_SECRET,
};

module.exports = env_config;
