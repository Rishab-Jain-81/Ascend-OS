import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './app/router/AppRouter.jsx';
import ThemeProvider from '../src/app/providers/ThemeProvider.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
