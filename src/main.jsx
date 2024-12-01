import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import App from './App';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	}
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
