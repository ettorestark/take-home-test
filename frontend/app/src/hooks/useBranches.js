import axios from 'axios'
import { useEffect, useState } from 'react';

export default function useBranches() {
	const [branches, setBranches] = useState([])

	useEffect(() => {
		axios(`http://localhost:3000/api/branches/${process.env.REACT_APP_GITHUB_USER}/${process.env.REACT_APP_GITHUB_REPOSITORY}`) 
			.then(data => {
				console.log(data)

				let elements = data.data.data
				console.log(elements)

				elements = elements.map(element => (
					{ name: element.name, sha: element.commit.sha }
				))

				console.log(elements)
				setBranches(elements)
			})

	}, [])

	return { branches }
}
