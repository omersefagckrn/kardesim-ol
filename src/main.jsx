import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'primereact/resources/themes/tailwind-light/theme.css';

import App from './App';
import FormComponent from './components/FormComponent';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '/re-register',
		element: <FormComponent />
	}
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
