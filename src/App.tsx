import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './styles/App.scss';
import  Home from './pages/Home';
import Users from './pages/admin/Users';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { ThemeContext, themes, Toggle } from './components/toggleTheme';

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </div>
);

export default App;