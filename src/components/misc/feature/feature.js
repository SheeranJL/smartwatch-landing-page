import React from 'react';
import './feature.scss';

const Feature = ({icon, header, desc, left}) => {

  return (
    <div className={left ? 'product-feature-left' : 'product-feature-right'}>
      <span>{icon}</span>
      <h4>{header}</h4>
      <p>{desc}</p>
    </div>
  )
}

export default Feature;
