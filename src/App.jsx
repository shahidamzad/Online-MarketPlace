import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Services from './page/Services';
import Dashboard from './page/DashBoard';
import Login from './Component/auth/Login';
import Signup from './Component/auth/Signup';
import ServiceDetails from './Component/Services/ServiceCard';
import BookingForm from './Component/Booking/BookingFrom';
import BookingConfirmation from './Component/Booking/BookingConformation';
import { AuthProvider } from './Context/AuthContext';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/book/:id" element={<BookingForm />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;