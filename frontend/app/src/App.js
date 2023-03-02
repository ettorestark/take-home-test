import './App.css';
import { useState } from 'react';
import AppContext from './Context/AppContext';

import DropDown from './components/molecules/DropDown';
import Commits from './components/molecules/Commits';

function App() {
	const [currentBranch, setCurrentBranch] = useState({
		name: 'main',
		sha: ''
	})

  return (
		<AppContext.Provider value={{ currentBranch, setCurrentBranch }}>
			<div className="container mx-auto my-4 px-4">
				<DropDown />
				<Commits />		
			</div>
		</AppContext.Provider>
  );
}

export default App;
