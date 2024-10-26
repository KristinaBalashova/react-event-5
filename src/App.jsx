import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/AuthPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import HelpRequestPage from './pages/HelpRequestPage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import AuthPage from './pages/AuthPage.jsx';
import { Header } from './components/header/Header.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/catalog"
              element={
                <ProtectedRoute>
                  <CatalogPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/help-request/:itemId"
              element={
                <ProtectedRoute>
                  <HelpRequestPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/auth"
              element={
                <ProtectedRoute>
                  <AuthPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
