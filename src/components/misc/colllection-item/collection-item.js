import React from 'react';
import './collection-item.scss';

import Button from '../button/button.js';

const CollectionItem = ({img, price, title}) => {

  return (

    <div className='collection-image-container'>

        <div className='collection-image'>
          <img src={img}/>
        </div>

        <div className='collection-info'>
          <h4>{title}</h4>
          <p>{price}</p>
          <Button>Buy Now</Button>
        </div>

    </div>

  )
}

export default CollectionItem;
