import useAppContext from "../../hooks/useAppContext"
import useCommits from '../../hooks/useCommits'
import moment from "moment"

function Commits() {
	const { currentBranch } = useAppContext()
	const { commits } = useCommits({ branch: currentBranch.sha })

	return <>
		{commits.map(record => (
			<>
				<span 
					class="block my-4 text-[#8b949e]"
				>
				<svg 
					aria-hidden="true"
					height="16" viewBox="0 0 16 16" 
					version="1.1" width="16"
					data-view-component="true" 
					class="w-5 fill-current inline"
					>
						<path fill-rule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"></path>
				</svg>
					Commits on {record.date}
				</span>
			
				{record.commits.map(commit => (
				<div class="block ml-4 rounded-md border border-gray-600">
					<div class="flex hover:bg-[#161b22] py-2 px-4">
						<div class="flex-1">
							<span class="bold">
								{commit.message}
							</span>
							<div class="flex">
								<img 
									src={commit.avatar}
									alt="Author icon"
									width="25" 
									height="25"
									class="rounded-full mr-2"
								/> 
								<a
									href="https://github.com/ettorestark"
									class="text-sm"
								>
									{commit.author}
								</a>
								<span class="text-[#8b949e] text-sm">
									&nbsp; Commited on {moment(commit.date).fromNow()}
								</span>
							</div>
						</div>
						<div class="flex-none">
							<div class="bg-[#30363d] text-[#58a6ff] p-2 rounded-md">
								<a href="#" class="text-sm">{commit.sha.substr(0, 7)}</a>
							</div>
							
						</div>
					</div>
				</div>
				))}
			</>
		))}
	</>
}

export default Commits 