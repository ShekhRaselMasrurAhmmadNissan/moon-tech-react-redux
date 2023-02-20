import { RouterProvider } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import routes from './Router/Routes';

function App() {
	return (
		<div>
			<RouterProvider router={routes} />
		</div>
	);
}

export default App;
