import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

/*The Route component takes several props:

path: This is the URL path that the route should match. In this case, it is set to "/", meaning that it will match the root path.
exact: This prop is used to ensure that the route only matches the exact path specified, rather than also matching any nested paths. Setting it to true means that the route will only match the root path and not any sub-paths.
component: This prop specifies the component that should be rendered when the route is matched. In this case, the Home component will be rendered. */


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/services' exact element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App
