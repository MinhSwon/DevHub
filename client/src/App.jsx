import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Booking from './pages/Booking';
import Shop from './pages/Shop';
import News from './pages/News';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard.jsx';
import About from './pages/About';
import Events from './pages/Events';
import Facilities from './pages/Facilities';
import Community from './pages/Community';
import Training from './pages/Training';
import Teams from './pages/Teams';
import Profile from './pages/Profile';
import Media from './pages/Media';
import Achievements from './pages/Achievements';
import LogoDemo from './pages/LogoDemo';
import HeaderDemo from './pages/HeaderDemo';
import BannerDemo from './pages/BannerDemo';
import OceanThemeDemo from './pages/OceanThemeDemo';
import UMTShowcase from './pages/UMTShowcase';

function LayoutWrapper() {
  const location = useLocation();
  const isAdminLayout = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminLayout && <TopHeader />}
      {!isAdminLayout && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={(
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            )}
          />
          <Route
            path="/admin"
            element={(
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            )}
          />
          <Route path="/booking" element={<Booking />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/community" element={<Community />} />
          <Route path="/training" element={<Training />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/media" element={<Media />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/logo-demo" element={<LogoDemo />} />
          <Route path="/header-demo" element={<HeaderDemo />} />
          <Route path="/banner-demo" element={<BannerDemo />} />
          <Route path="/ocean-theme" element={<OceanThemeDemo />} />
          <Route path="/umt-showcase" element={<UMTShowcase />} />
        </Routes>
      </main>
      {!isAdminLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <LayoutWrapper />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
