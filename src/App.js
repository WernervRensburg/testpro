import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Row from 'react-bootstrap/Row';

// Component imports
import NavbarComponent from './components/Navbar';
import FooterComponent from './components/Footer';
import HeaderComponent from './components/Header';

// Page imports
import HomePage from './pages/Home';
import ProjectsPage from './pages/Projects';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ConcretePage from './pages/services/Concrete';
import AsphaltPage from './pages/services/Asphalt';
import SoilGravelPage from './pages/services/SoilGravel';
import AggregatePage from './pages/services/Aggregate';
import CenterlinePage from './pages/services/Centerline';

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <div className="content-wrapper">
          <header className="App-header">
            <Router>
              <HeaderComponent />  
              <NavbarComponent />
              <Routes>
                <Route element={<HomePage />} path="/" />
                <Route element={<ProjectsPage />} path="/projects" />
                <Route element={<AboutPage />} path="/about" />
                <Route element={<ContactPage />} path="/contact" />
                <Route element={<ConcretePage />} path="/services/concrete" />
                <Route element={<AsphaltPage />} path="/services/asphalt" />
                <Route element={<SoilGravelPage />} path="/services/soilgravel" />
                <Route element={<AggregatePage />} path="/services/aggregate" />
                <Route element={<CenterlinePage />} path="/services/centerline" />
              </Routes>
            </Router>
          </header>
        </div>
        <FooterComponent className="footer-component"/>
      </div>
    </div>
  );
}

export default App;
