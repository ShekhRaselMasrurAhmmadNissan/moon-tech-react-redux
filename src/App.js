import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './Redux/Store';
import routes from './Router/Routes';

function App() {
	return (
		<div>
			<Provider store={store}>
				<RouterProvider router={routes} />
			</Provider>
		</div>
	);
}

export default App;
