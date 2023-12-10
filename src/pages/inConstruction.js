import React from 'react';
import * as styles from './inConstruction.module.css';

import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero'

const FaqPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Hero
          maxWidth={'900px'}
          image={'/construction.png'}
          title={`Página En construcción`}
          ctaLink={'regresa al inicio'}
          ctaTo={'/'}
        />
      </div>
    </Layout>
  );
};

export default FaqPage;
