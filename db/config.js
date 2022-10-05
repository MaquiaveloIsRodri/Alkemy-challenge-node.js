const { config } = require("../config/config")

const USER = encodeURIComponent(config.POSTGRES_USER);
const PASSWORD = encodeURIComponent(config.POSTGRES_PASSWORD)
const URL = `postgres://${USER}:${PASSWORD}@${config.POSTGRES_HOST}:${config.PORT}/${config.POSTGRES_NAME}`

module.exports = {
  development: {
    url: URL,
    dialect: 'postgres',
  },
  production: {
    url: URL,
    dialect: 'postgres',
  }
}
