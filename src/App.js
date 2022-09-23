import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import NavbarComponent from './components/Navbar';

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
        <NavbarComponent />
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<ServicesPage />} path="/" />
            <Route element={<ProjectsPage />} path="/" />
            <Route element={<AboutPage />} path="/" />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
