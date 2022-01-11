import React from 'react';
import './product-features.scss';

import Feature from '../misc/feature/feature.js';



const ProductFeatures = () => {

  return (

    <div className='product-features-container'>

      <div className='left-size'>
        <Feature
          icon='&#9733;'
          header='Heart Rate Monitoring'
          desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          left
        />

        <Feature
          icon='&#9733;'
          header='Workout Tracking'
          desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          left
        />

        <Feature
          icon='&#9733;'
          header='Fitness Tracking'
          desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          left
        />
      </div>

      <div className='feature-image-container'>
        <img src='http://www.webtechnologybd.com/html/Voltamic/assets/img/feature.png'/>
      </div>

      <div className='right-side'>
        <Feature
          icon='&#9733;'
          header='Retina display'
          desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />

        <Feature
          icon='&#9733;'
          header='Water Resistant'
          desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />

        <Feature
          icon='&#9733;'
          header='Magnetic Charging'
          desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />
      </div>

    </div>
  )
}

export default ProductFeatures;
