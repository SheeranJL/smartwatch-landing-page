import React from 'react';
import './boxed-feature.scss';

const BoxedFeature = ({icon, heading, desc, noShadow}) => {

  console.log(icon);

  return (
    <div className={noShadow ? 'boxed-feature-no-shadow' : 'boxed-feature-container'}>
      <span className='boxed-icon'>{icon}</span>
      <h3 className='boxed-heading'>{heading}</h3>
      <p className='boxed-desc'>{desc}</p>
    </div>
  )
}

export default BoxedFeature;
