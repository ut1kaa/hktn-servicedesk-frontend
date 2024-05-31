import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './styles/App.scss';
import  Home from './pages/Home'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// import { ThemeContext, themes, Toggle } from './components/toggleTheme';

const App = () => (
  <div className="App">
      {/* <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <Toggle
          value={theme === themes.dark}
        />
      )}
    </ThemeContext.Consumer> */}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/users" element={<Users />} />
      </Routes>
    </Router>
  </div>
);

export default App;