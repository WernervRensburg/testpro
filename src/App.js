import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import NavbarComponent from './components/Navbar';
import FooterComponent from './components/Footer';
import HeaderComponent from './components/Header';

// Page imports
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import ProjectsPage from './pages/Projects';
import AboutPage from './pages/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <HeaderComponent />  
          <NavbarComponent />
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<ServicesPage />} path="/services" />
              <Route element={<ProjectsPage />} path="/projects" />
              <Route element={<AboutPage />} path="/about" />
            </Routes>
          <FooterComponent />
        </Router>
      </header>
    </div>
  );
}

export default App;
