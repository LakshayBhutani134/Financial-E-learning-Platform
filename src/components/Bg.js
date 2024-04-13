import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Bg.css';

function Bg() {
  return (
    <div className='Bg-container'>
      <video src="video-2.mp4" autoPlay loop muted />
      <h1>Paisa, Planning aur Paathshaala</h1>
      <p>What are you waiting for?</p>
      <div className='Bg-btns'>
        <Button 
        className='btn22' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'>
            GET STARTED
        </Button>
        <Button 
        className='btns' 
        buttonStyle='btn--primary'
        buttonSize='btn--large'>
            SIGN UP
        </Button>
      </div>
    </div>
  )
}

export default Bg
