import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Contact from './routes/Contact';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Projects" element={<Projects />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
    </>
  );
}

export default App;
