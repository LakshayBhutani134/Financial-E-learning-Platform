import React from 'react';
import Navbar from './components/Navbar';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom"
import './App.css';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import SignUp from './components/pages/SignUp';
import ChatBot from './components/pages/ChatBot';
import Quiz from './components/pages/Quiz';
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
      <Route path='/quiz' exact element={ <Quiz />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
