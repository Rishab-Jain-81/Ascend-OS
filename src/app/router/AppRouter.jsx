import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout.jsx';
import DashboardPage from '../../features/dashboard/pages/DashboardPage.jsx';
import BackendPage from '../../features/backend/pages/BackendPage.jsx';
import DatabasePage from '../../features/database/pages/DatabasePage.jsx';
import DsaPage from '../../features/dsa/pages/DsaPage.jsx';
import AiPage from '../../features/ai/pages/AiPage.jsx';
import ErrorPage from '../../features/error/pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'backend', element: <BackendPage /> },
      { path: 'database', element: <DatabasePage /> },
      { path: 'dsa', element: <DsaPage /> },
      { path: 'ai', element: <AiPage /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

export default router;
