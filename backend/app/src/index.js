const express = require('express')
const cors = require('cors')
const app = express()
const config = require('./config/config')
const routes = require("./routes/repo.route")
const response = require("./helpers/response")

app.use(express.json())
app.use(cors())

app.use(response.setHeadersForCORS);
app.use("/api", routes)

app.use(function(req, res) {
  response.NotFound(res);
});

app.listen(config.APP_PORT, () => {
	console.log(`Server up and runin on port ${config.APP_PORT}`)
})