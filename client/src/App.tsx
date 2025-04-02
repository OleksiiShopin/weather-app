import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherPage from './pages/WeatherPage';
import Sidebar from './components/Sidebar/Sidebar';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
     <Router>
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<WeatherPage />} />
            {/* <Route path="/cities" element={<CitiesPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/settings" element={<SettingsPage />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
