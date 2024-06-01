import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import  Home from './pages/Home'
import Users from './pages/admin/Users';
import Departaments from './pages/admin/Departaments';
import Tickets from './pages/admin/Tickets';
import Icon from "@mdi/react";
import { mdiHome, mdiListBox, mdiAccount, mdiAccountStar, mdiAccountKey,mdiMicrophone } from '@mdi/js';
import { Form, Button } from "react-bootstrap";
import Link from'react-router-dom';




const App = () => (
  <div className="App">
    <div className="container-fluid">
            <div className="row">
                <header className="menu">
                <nav className="sidebar-sticky navbar-dark navbar-expand-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto flex-column">
                        <li className="nav-item active">
                            <a href="" className="nav-link">
                                <Icon path={mdiHome} size={1}></Icon>
                                <span className="menu-text">Главная</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">
                                <Icon path={mdiListBox} size={1}></Icon>
                                <span className="menu-text">Заявки</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">
                                <Icon path={mdiAccount} size={1}></Icon>
                                <span className="menu-text">Пользователи</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/admin/users" className="nav-link">
                                <Icon path={mdiAccountStar} size={1}></Icon>
                                <span className="menu-text">Администратор</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">
                                <Icon path={mdiAccountKey} size={1}></Icon>
                                <span className="menu-text">Работник</span>
                            </a>
                        </li>
                    </ul>
                    </div>
                </nav>
                </header>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <header className="menu">
                <nav className="sidebar-sticky navbar-dark navbar-expand-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto flex-column">
                        <li className="nav-item active">
                            <a href="" className="nav-link">
                                <Icon path={mdiHome} size={1}></Icon>
                                <span className="menu-text">Главная</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                <Icon path={mdiListBox} size={1}></Icon>
                                <span className="menu-text">Заявки</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">
                                <Icon path={mdiAccount} size={1}></Icon>
                                <span className="menu-text">Пользователи</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/admin/users" className="nav-link">
                                <Icon path={mdiAccountStar} size={1}></Icon>
                                <span className="menu-text">Администратор</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">
                                <Icon path={mdiAccountKey} size={1}></Icon>
                                <span className="menu-text">Работник</span>
                            </a>
                        </li>
                    </ul>
                    </div>
                </nav>
                </header>
                </div>
</div>
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