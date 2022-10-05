require("dotenv").config();
const config = {
  PORT: process.env.PORT || 3000,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_NAME: process.env.POSTGRES_DB,
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD
}

module.exports = { config };
