import React from 'react';
import Main from './components/Main';
import Box from './components/Box';
import Contact from './Contact';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <Router >
      <div className="App">
          {/* <Box darkMode={darkMode} /> */}
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}></Navbar>
        <div className='content'>
          <Routes>
            <Route path='/portfolio' element={<Main darkMode={darkMode}/>} />
            <Route path="/contact" element={<Contact darkMode={darkMode}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
