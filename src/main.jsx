import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/AuthPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import HelpRequestPage from './pages/HelpRequestPage/HelpRequestPage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import AuthPage from './pages/AuthPage.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import App from './App.jsx';
import './index.css';
import { grey } from '@mui/material/colors';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
  },
  palette: {
    background: {
      primary: grey['A100'],
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
      {
        path: '/auth',
        element: (
          <ProtectedRoute>
            <AuthPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/catalog',
        element: (
          <ProtectedRoute>
            <CatalogPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/help-request/:itemId',
        element: (
          <ProtectedRoute>
            <HelpRequestPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </CssBaseline>
  </StrictMode>,
);
