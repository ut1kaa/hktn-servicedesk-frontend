import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './styles/App.scss';
import  Home from './pages/Home'
import Users from './pages/admin/Users';
import Departaments from './pages/admin/Departaments';


const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/departaments" element={<Departaments />} />
      </Routes>
    </Router>
  </div>
);

export default App;