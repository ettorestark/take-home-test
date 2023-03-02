const express = require("express")
const routes = express.Router();
const RepoController = require('../controllers/repo.controller')

routes.get('/repos/:owner/:repo', RepoController.getCommits)

routes.get('/branches/:owner/:repo', RepoController.getBranches)

module.exports = routes;