import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import './Button.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='./videos/nz-hills.mp4' autoPlay loop muted />
        <h1>ADVENTURE AWAITS!</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
          <Link to='/quests'>
            <button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
                JOIN A QUEST!
            </button>
          </Link>
          <Link to='/shop'>
            <button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
                SHOP OUR WARES!
            </button>
          </Link>
        </div>
    </div>
  )
}

export default HeroSection;