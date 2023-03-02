import { useContext } from "react";
import AppContext from "../Context/AppContext";

function useAppContext() {
	return useContext(AppContext)
}

export default useAppContext

