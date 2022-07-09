import Main from './components/Main';
import Contact from './Contact';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar></Navbar>
        <div className='content'>
          <Routes>
            <Route path="/portfolio" element={<Main />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
