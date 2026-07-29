import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './app/router/AppRouter.jsx';
// import Approuter from './router/AppRouter.jsx';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
