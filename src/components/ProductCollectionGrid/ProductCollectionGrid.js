import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/products/icon_caqueta.png'}
        title={'Piedemonte caqueteño'}
        text={'descubreme'}
        link={'/product/caqueta'}
      />
      <ProductCollection
        image={'/products/icon_maziso.png'}
        title={'Tierradentro y maziso colombiano'}
        text={'descubreme'}
        link={'/product/maziso'}
      />
      <ProductCollection
        image={'/products/icon_amazonas.png'}
        title={'Amazonas'}
        text={'descubreme'}
        link={'/product/amazonas'}
      />
      <ProductCollection
        image={'/products/icon_sierra.png'}
        title={'Sierra Nevada'}
        text={'descubreme'}
        link={'/product/sierra'}
      />
      <ProductCollection
        image={'/products/icon_soata.png'}
        title={'Soata Boyaca'}
        text={'descubreme'}
        link={'/product/soata'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
