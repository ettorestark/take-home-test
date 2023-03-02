import useAppContext from "../../hooks/useAppContext"

function DropDownButton({ isOpen, setIsOpen }) {
	const { currentBranch } = useAppContext()
	console.log(currentBranch)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<button 
			id="dropdownInformationButton"
			data-dropdown-toggle="dropdownInformation" 
			className="bg-[#161b22] border-[0.5px] border-gray-600 rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" 
			type="button"
			onClick={handleClick}
		>
			<svg 
				height="16" 
				viewBox="0 0 16 16" 
				version="1.1" width="16" 
				className="w-5 fill-current inline"
			>
				<path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path>
			</svg>
				{currentBranch.name}
			<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
		</button>
	)
}

export default DropDownButton