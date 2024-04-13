import React from 'react';
import Navbar from './components/Navbar';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom"
import './App.css';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import SignUp from './components/pages/SignUp';
import Invest from './components/pages/Invest';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' exact element={ <Home />}></Route>
      <Route path='/courses' exact element={ <Courses />}></Route>
      <Route path='/sign-up' exact element={ <SignUp />}></Route>
      <Route path='/Invest' exact element={ <Invest />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
