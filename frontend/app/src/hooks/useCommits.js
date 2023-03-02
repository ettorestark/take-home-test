import axios from 'axios'
import { useEffect, useState } from 'react';
import moment from 'moment';

export default function useCommits({ branch = 'main' }) {
	const [commits, setCommits] = useState([])

	useEffect(() => {
		axios(`http://localhost:3000/api/repos/${process.env.REACT_APP_GITHUB_USER}/${process.env.REACT_APP_GITHUB_REPOSITORY}?sha=${branch}`) 
			.then(data => {
				let elements = data.data.data

				elements = elements.map(commit => (
					{
						url: commit.full_url,
						sha: commit.sha,
						...commit.commit
					}
				))

				const groups = elements.reduce((groups, commit) => {
					let date = commit.date.split('T')[0]
					date = moment(date).format('MMMM Do YYYY');

					if (!groups[date]) {
						groups[date] = []
					}

					groups[date].push(commit)

					return groups
				}, {})

				const groupArray = Object.keys(groups).map((date) => {
					return {
						date, 
						commits: groups[date]
					}
				})

				setCommits(groupArray)
			})

	}, [branch])

	return { commits }
}
