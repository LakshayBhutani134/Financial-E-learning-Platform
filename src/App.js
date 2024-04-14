import React from 'react';
import Navbar from './components/Navbar';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom"
import './App.css';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import SignUp from './components/pages/SignUp';
import ChatBot from './components/pages/ChatBot';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' exact element={ <Home />}></Route>
      <Route path='/courses' exact element={ <Courses />}></Route>
      <Route path='/sign-up' exact element={ <SignUp />}></Route>
      <Route path='/chatbot' exact element={ <ChatBot />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
