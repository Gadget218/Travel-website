import React from 'react';
import Navbar from './components/Navbar'; //define the path for navbar
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';// router contains pages and paths basically
import './App.css';
import Home from './components/pages/Home'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
