import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/products/endless_p10.jpg'}
        title={'P10'}
        text={'descubreme'}
        link={'/product/P10'}
      />
      <ProductCollection
        image={'/products/endless_p14.jpg'}
        title={'P14'}
        text={'descubreme'}
        link={'/product/P14'}
      />
      <ProductCollection
        image={'/products/endless_p17.jpg'}
        title={'P17'}
        text={'descubreme'}
        link={'/product/P17'}
      />
      <ProductCollection
        image={'/products/endless_p28.jpg'}
        title={'P28'}
        text={'descubreme'}
        link={'/product/P28'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
