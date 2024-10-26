import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import HelpRequestPage from './pages/HelpRequestPage.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import { Header } from './components/header/Header.jsx';
import { Footer } from './components/footer/Footer.jsx';

function App() {
  return (
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
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
