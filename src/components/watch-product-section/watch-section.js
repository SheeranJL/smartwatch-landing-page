import React from 'react';
import './watch-section.scss';

const WatchSection = () => {

  return (
    <div className='watch-section-container'>

      <div className='left-side-info'>
        <h1>Awesome Digital Watch Can Make Your Life Easier</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam</p>
        <ul className='watch-info-list'>
          <li>Sleep Quality Monitor</li>
          <li>Unlimited users & Social network interface</li>
          <li>Heart Rate Monitor & Step Counter</li>
          <li>Wi-Fi Data Sync and Weather Update</li>
        </ul>      
      </div>

      <div className='right-side-graphic'>
        <img src='http://www.webtechnologybd.com/html/Voltamic/assets/img/about.png' />
      </div>

    </div>
  )

}

export default WatchSection;
