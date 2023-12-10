import React, { useState, useEffect } from 'react';
import * as styles from './shop.module.css';

import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import CardController from '../components/CardController';
import Container from '../components/Container';
import Chip from '../components/Chip';
import Icon from '../components/Icons/Icon';
import Layout from '../components/Layout';
import LayoutOption from '../components/LayoutOption';
import ProductCardGrid from '../components/ProductCardGrid';
import { generateMockProductData } from '../helpers/mock';
import Button from '../components/Button';
import Config from '../config.json';

const ShopPage = (props) => {
  const [showFilter, setShowFilter] = useState(false);
  // todo dinamically pull products based on the filters defined by the user
  const data = generateMockProductData(6, 'poinsettia');

  useEffect(() => {
    window.addEventListener('keydown', escapeHandler);
    return () => window.removeEventListener('keydown', escapeHandler);
  }, []);

  const escapeHandler = (e) => {
    if (e?.keyCode === undefined) return;
    if (e.keyCode === 27) setShowFilter(false);
  };

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
                // todo set dinamyc breadcrumbs
              crumbs={[
                { link: '/', label: 'Inicio' },
                { label: 'Poinsettias' },
              ]}
            />
          </div>
        </Container>
        <Banner
          maxWidth={'650px'}
          name={`Poinsettias`}
          subtitle={
            'Nuestras plantas insignia y la piedra angular de nuestra empresa. ' +
            'Una Alternativa natural para decorar la navidad'
          }
        />
        <Container size={'large'} spacing={'min'}>
          {/*/!*filters, count, and current filter buttons*!/*/}
          {/*<div className={styles.metaContainer}>*/}
          {/*  <span className={styles.itemCount}>476 items</span>*/}
          {/*  <div className={styles.controllerContainer}>*/}

          {/*    /!*Filter dropdown*!/*/}
          {/*    <div*/}
          {/*      className={styles.iconContainer}*/}
          {/*      role={'presentation'}*/}
          {/*      onClick={() => setShowFilter(!showFilter)}*/}
          {/*    >*/}
          {/*      <Icon symbol={'filter'} />*/}
          {/*      <span>Filters</span>*/}
          {/*    </div>*/}

          {/*    /!*sort dropdown*!/*/}
          {/*    <div*/}
          {/*      className={`${styles.iconContainer} ${styles.sortContainer}`}*/}
          {/*    >*/}
          {/*      <span>Sort by</span>*/}
          {/*      <Icon symbol={'caret'} />*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<CardController*/}
          {/*  closeFilter={() => setShowFilter(false)}*/}
          {/*  visible={showFilter}*/}
          {/*  filters={Config.filters}*/}
          {/*/>*/}
          {/*<div className={styles.chipsContainer}>*/}
          {/*  /!*todo dynamic filtering of product by size*!/*/}
          {/*  <Chip name={'XS'} />*/}
          {/*  <Chip name={'S'} />*/}
          {/*</div>*/}
          <div className={styles.productContainer}>
            {/*<span className={styles.mobileItemCount}>476 items</span>*/}
            <ProductCardGrid data={data}></ProductCardGrid>
          </div>

          {/*load more button*/}
          {/*<div className={styles.loadMoreContainer}>*/}
          {/*  <span>6 of 456</span>*/}
          {/*  <Button fullWidth level={'secondary'}>*/}
          {/*    LOAD MORE*/}
          {/*  </Button>*/}
          {/*</div>*/}
        </Container>
      </div>

      <LayoutOption />
    </Layout>
  );
};

export default ShopPage;
