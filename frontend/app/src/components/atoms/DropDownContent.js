import useAppContext from '../../hooks/useAppContext'
import useBranches from '../../hooks/useBranches'

function DropDownContent({ isOpen, setIsOpen }) {
	const { setCurrentBranch }  = useAppContext()
	const { branches } = useBranches()

	const handleClick = (e) => {
		setIsOpen(!isOpen)
		setCurrentBranch({ 
			name: e.target.dataset.branch,
			sha:  e.target.dataset.sha,
		})
	}

	return (
		<div 
			id="dropdownInformation" 
			className={`z-10 ${isOpen === false ? 'hidden' : 'block' } bg-[#161b22] border-[0.5px] border-gray-600 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 break-words`}
		>
			<ul 
				className="py-2 text-sm" 
				aria-labelledby="dropdownInformationButton"
			>
				{branches.map(branch => (
					<li key={branch.name}>
						<span 
							href="#" 
							className="block px-4 py-2"
							onClick={handleClick}
							data-branch={branch.name}
							data-sha={branch.sha}
						>
							{branch.name}
						</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default DropDownContent