import React from 'react';
import './amazing-features.scss';
import BoxedFeature from '../boxed-feature/boxed-feature.js';

const AmazingFeatures = () => {

  return (
    <div className='amazing-features-container'>

      <h1>Amazing Features</h1>

      <div className='amazing-features-grid'>

        <BoxedFeature
          icon='&#9733;'
          heading='Attractive Design'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor'
          noShadow
        />

        <BoxedFeature
          icon='&#9733;'
          heading='Attractive Design'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor'
          noShadow
        />

        <BoxedFeature
          icon='&#9733;'
          heading='Attractive Design'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor'
          noShadow
        />

        <BoxedFeature
          icon='&#9733;'
          heading='Attractive Design'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor'
          noShadow
        />

        <BoxedFeature
          icon='&#9733;'
          heading='Attractive Design'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor'
          noShadow
        />

        <BoxedFeature
          icon='&#9733;'
          heading='Attractive Design'
          desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor'
          noShadow
        />

      </div>
    </div>
  )
}

export default AmazingFeatures;
