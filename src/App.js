import Home from './pages/home';
import Profile from './pages/profile';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profile/:name/:linkedin/:github' element={<Profile />} />
				<Route path='*' element={<p>404</p>} />
			</Routes>
		</Router>
	);
}

export default App;
