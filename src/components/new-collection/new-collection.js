import React from 'react';
import './new-collection.scss';

import CollectionItem from '../misc/colllection-item/collection-item.js';

const NewCollection = () => {

  return (
    <div className='new-collection-container'>

      <h1> New Collection </h1>

      <div className='container-collection'>
        <CollectionItem
          img='http://www.webtechnologybd.com/html/Voltamic/assets/img/shop/watch-1.jpg'
          title='Apple Watch - A01'
          price='$70.00'
        />

        <CollectionItem
          img='http://www.webtechnologybd.com/html/Voltamic/assets/img/shop/watch-2.jpg'
          title='Apple Watch - A02'
          price='$100.00'
        />

        <CollectionItem
          img='http://www.webtechnologybd.com/html/Voltamic/assets/img/shop/watch-3.jpg'
          title='Apple Watch - A03'
          price='$80.00'
        />

        <CollectionItem
          img='http://www.webtechnologybd.com/html/Voltamic/assets/img/shop/watch-4.jpg'
          title='Apple Watch - A04'
          price='$80.00'
        />
      </div>

    </div>
  )

}

export default NewCollection;
