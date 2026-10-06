import Home from '../pages/public/Home.jsx';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Activities from '../pages/public/Activities.jsx';
import ActivityDetails from '../pages/public/ActivityDetails.jsx';
import Vacations from '../pages/public/Vacations.jsx';
import Gallery from '../pages/public/Gallery.jsx';
import About from '../pages/public/About.jsx';
import Contact from '../pages/public/Contact.jsx';
import Login from '../pages/auth/Login.jsx';
import Register from '../pages/auth/Register.jsx';
import Dashboard from '../pages/parent/Dashboard.jsx';
import Children from '../pages/parent/Children.jsx';
import Registrations from '../pages/parent/Registrations.jsx';
import Schedule from '../pages/parent/Schedule.jsx';
import Payments from '../pages/parent/Payments.jsx';
import Profile from '../pages/parent/Profile.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import { LanguageProvider } from '../context/LanguageContext.jsx';

function AppRoutes() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/:activityId" element={<ActivityDetails />} />
          <Route path="/programs" element={<Navigate to="/" replace />} />
          <Route path="/vacations" element={<Vacations />} />
          <Route path="/vacations/:campId" element={<Vacations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/parent" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/parent/children" element={<ProtectedRoute><Children /></ProtectedRoute>} />
          <Route path="/parent/registrations" element={<ProtectedRoute><Registrations /></ProtectedRoute>} />
          <Route path="/parent/schedule" element={<ProtectedRoute><Schedule /></ProtectedRoute>} />
          <Route path="/parent/payments" element={<ProtectedRoute><Payments /></ProtectedRoute>} />
          <Route path="/parent/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
