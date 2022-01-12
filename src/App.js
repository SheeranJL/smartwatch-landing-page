import React from 'react';
import './App.scss';

import Header from './components/header/header.js';
import UpperDisplay from './components/upper-display/upper-display.js';
import BoxedFeature from './components/boxed-feature/boxed-feature.js';
import WatchSection from './components/watch-product-section/watch-section.js';
import AmazingFeatures from './components/amazing-features/amazing-features.js';
import VideoInfo from './components/video-info/video-info.js';
import ProductFeatures from './components/product-features/product-features.js';
import NewCollection from './components/new-collection/new-collection.js';

const App = () => {

  return (
    <div className='app-container'>

      <Header />
      <UpperDisplay />

      <div className='boxed-container'>
        <BoxedFeature
          icon='&#9733;'
          heading='High Quality Design'
          desc='Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod'
        />

        <BoxedFeature
          icon='&#9733;'
          heading='Easy to Customize'
          desc='Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod'
        />

        <BoxedFeature
          icon='&#9733;'
          heading='Easy to Customize'
          desc='Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod'
        />
      </div>

      <div className='watch-section-background'>
        <div className='watch-product-overview-container'>
          <WatchSection />
        </div>
      </div>

      <AmazingFeatures />

      <div className='video-info-background-container'>
        <VideoInfo />
      </div>

      <ProductFeatures />

      <NewCollection />
    </div>
  )
}

export default App;
