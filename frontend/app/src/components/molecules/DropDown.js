import { useState } from "react"
import DropDownButton from "../atoms/DropDownButton"
import DropDownContent from "../atoms/DropDownContent"

export default function DropDown() {
	const [isOpen, setIsOpen] = useState(false)

	return (
			<>
				<DropDownButton 
					setIsOpen={setIsOpen}
				/>
				<DropDownContent 
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
			</>
	)
}