const config = require('../config/config')
const response = require("../helpers/response")
const GithubAPI = require("../services/Github")

exports.getCommits = async (req, res) => {
	const {repo,owner} = req.params
	const queryString = new URLSearchParams(req.query).toString()
	/**
	 * read this https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28
	 * in List commits read sha paramater very important
	 */
	const url = `https://api.github.com/repos/${owner}/${repo}/commits?${queryString}`
	const commitsData = await GithubAPI.getCommits({
		url: url,
		token: config.GITHUB_ACCESS_TOKEN
	})
    if(commitsData.error){
        response.sendError(res)
		return	
    }
    response.sendData(res,'Commits success',commitsData)
}

exports.getBranches = async (req, res) => {
	const { repo, owner } = req.params
	const url = `https://api.github.com/repos/${owner}/${repo}/branches`
	const branchesData = await GithubAPI.getBranches({
		url: url,
		token: config.GITHUB_ACCESS_TOKEN
	})
	response.sendData(res,'Branches success',branchesData)
}