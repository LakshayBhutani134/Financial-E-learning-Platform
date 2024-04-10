import React from 'react';
import Navbar from './components/Navbar';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom"
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import About from './components/pages/About';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' exact element={ <Home />}></Route>
      <Route path='/services' exact element={ <Services />}></Route>
      <Route path='/sign-up' exact element={ <SignUp />}></Route>
      <Route path='/about' exact element={ <About />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
