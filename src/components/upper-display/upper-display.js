import React from 'react';
import './upper-display.scss';
import Button from '../misc/button/button.js';

const UpperDisplay = () => {

  return (
    <div className='upper-display-container'>

      <div className='upper-intro-container'>
        <div className='upper-intro'>
          <h1>Smart digital watch for your daily luxurious life</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam </p>
          <Button>Buy Products</Button>
        </div>
      </div>

      <div className='upper-image'>
        <img src='http://www.webtechnologybd.com/html/Voltamic/assets/img/home-font.png' />
      </div>

    </div>
  )
}

export default UpperDisplay;
