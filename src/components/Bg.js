import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Bg.css';

function Bg() {
  return (
    <div className='Bg-container'>
      <video src="video-2.mp4" autoPlay loop muted />
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className='Bg-btns'>
        <Button 
        className='btns' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'>
            GET STARTED
        </Button>
        <Button 
        className='btns' 
        buttonStyle='btn--primary'
        buttonSize='btn--large'>
            WATCH TRAILER <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  )
}

export default Bg
