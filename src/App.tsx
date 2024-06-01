import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import  Home from './pages/Home'
import Users from './pages/admin/Users';
import Departaments from './pages/admin/Departaments';
import Tickets from './pages/admin/Tickets';


const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/departaments" element={<Departaments />} />
        <Route path="/admin/tickets" element={<Tickets />} />
      </Routes>
    </Router>
  </div>
);

export default App;