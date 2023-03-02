const dotenv = require('dotenv')
dotenv.config()

module.exports = {
	APP_PORT: process.env.PORT || 3000,
	GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN
}