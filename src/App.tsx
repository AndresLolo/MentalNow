import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import PsychologicalTest from './pages/PsychologicalTest';
import TherapistList from './pages/TherapistList';
import TherapistProfile from './pages/TherapistProfile';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<PsychologicalTest />} />
            <Route path="/therapists" element={<TherapistList />} />
            <Route path="/therapist/:id" element={<TherapistProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;