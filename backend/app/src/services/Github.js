const fetch = require('node-fetch')
const GithubAPI = {}

GithubAPI.getCommits = async (options) => {

  const {url,token} = options

  let fetchOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github+json','X-GitHub-Api-Version': '2022-11-28',
      Authorization: `Bearer ${token}`
    }
  };

  const datos = await fetch(url, fetchOptions)
  const data = await datos.json()
  
  if(datos.status != 200) {
    return {error: true, ...data}
  }

  return data.map( item => {
    return {
      sha: item.sha,
      sha7: item.sha.slice(0,7),
      full_url: item.html_url,
      verified: item.commit?.verification?.verified ?? false,
      commit: {
        message: item.commit.message,
        author: item.author?.login ?? item.commit.author.name,
        avatar: item.author?.avatar_url ?? null,
        date: item.commit.author.date
      }
    }
  })
  
}

GithubAPI.getBranches = async (options) => {
  const { url, token } = options

  let fetchOptions = {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28',
      Authorization: `Bearer ${token}`
    }
  };

  const datos = await fetch(url, fetchOptions)
  const data = await datos.json()

  return data
}

module.exports = GithubAPI