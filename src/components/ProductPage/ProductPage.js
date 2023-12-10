import React, {useState, useContext} from 'react';
import * as styles from './ProductPage.module.css';

import Accordion from '../../components/Accordion';
// import AdjustItem from '../../components/AdjustItem';
// import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import Gallery from '../../components/Gallery';
// import SizeList from '../../components/SizeList';
// import Split from '../../components/Split';
// import SwatchList from '../../components/SwatchList';
import Layout from '../../components/Layout/Layout';

// import {generateMockProductData} from '../../helpers/mock';
// import Icon from '../../components/Icons/Icon';
// import ProductCardGrid from '../../components/ProductCardGrid';
// import {navigate} from 'gatsby';

import productJson from '../../helpers/product.json';

import AddItemNotificationContext
    from '../../context/AddItemNotificationProvider';

const ProductPage = ({ productCode }) => {
    const ctxAddItemNotification = useContext(AddItemNotificationContext);
    // const showNotification = ctxAddItemNotification.showNotification;
    // const sampleProduct = generateMockProductData(1, 'P14')[0];
    const sampleProduct = productJson.find(
        function(item) {return item.productCode == productCode}
    );
    // const [qty, setQty] = useState(0);
    // const [isWishlist, setIsWishlist] = useState(false);
    // const [activeSwatch, setActiveSwatch] = useState(
    //   sampleProduct.colorOptions[0]
    // );
    // const [activeSize, setActiveSize] = useState(sampleProduct.sizeOptions[0]);
    // const suggestions = generateMockProductData(4, 'woman');

    return (
        <Layout>
            <div className={styles.root}>
                <Container size={'large'} spacing={'min'}>
                    <Breadcrumbs
                        crumbs={[
                            {link: '/', label: 'inicio'},
                            {link: '/shop', label: 'Poinsettias'},
                            {label: `${sampleProduct.name}`}
                        ]}
                    />
                    <div className={styles.content}>
                        <div className={styles.gallery}>
                            <Gallery images={sampleProduct.gallery}/>
                        </div>
                        <div className={styles.details}>
                            <h1>{sampleProduct.name}</h1>

                            {/*<span className={styles.vendor}> by {sampleProduct.vendor}</span>*/}

                            <div className={styles.priceContainer}>
                                <CurrencyFormatter
                                    amount={sampleProduct.price}/>
                            </div>


                            {/*color list*/}
                            {/*<div>*/}
                            {/*  <SwatchList*/}
                            {/*    swatchList={sampleProduct.colorOptions}*/}
                            {/*    activeSwatch={activeSwatch}*/}
                            {/*    setActiveSwatch={setActiveSwatch}*/}
                            {/*  />*/}
                            {/*</div>*/}


                            {/*size options*/}
                            {/*<div className={styles.sizeContainer}>*/}
                            {/*  <SizeList*/}
                            {/*    sizeList={sampleProduct.sizeOptions}*/}
                            {/*    activeSize={activeSize}*/}
                            {/*    setActiveSize={setActiveSize}*/}
                            {/*  />*/}
                            {/*</div>*/}

                            {/*<div className={styles.quantityContainer}>*/}
                            {/*  <span>Quantity</span>*/}
                            {/*  <AdjustItem qty={qty} setQty={setQty} />*/}
                            {/*</div>*/}

                            {/*<div className={styles.actionContainer}>*/}
                            {/*  <div className={styles.addToButtonContainer}>*/}
                            {/*    <Button*/}
                            {/*      onClick={() => showNotification()}*/}
                            {/*      fullWidth*/}
                            {/*      level={'primary'}*/}
                            {/*    >*/}
                            {/*      Add to Bag*/}
                            {/*    </Button>*/}
                            {/*  </div>*/}
                            {/*  <div*/}
                            {/*    className={styles.wishlistActionContainer}*/}
                            {/*    role={'presentation'}*/}
                            {/*    onClick={() => setIsWishlist(!isWishlist)}*/}
                            {/*  >*/}
                            {/*    <Icon symbol={'heart'}></Icon>*/}
                            {/*    <div*/}
                            {/*      className={`${styles.heartFillContainer} ${*/}
                            {/*        isWishlist === true ? styles.show : styles.hide*/}
                            {/*      }`}*/}
                            {/*    >*/}
                            {/*      <Icon symbol={'heartFill'}></Icon>*/}
                            {/*    </div>*/}
                            {/*  </div>*/}
                            {/*</div>*/}

                            <div className={styles.description}>
                              <p>{sampleProduct.description}</p>
                              <span>Codigo: {sampleProduct.productCode}</span>
                            </div>

                            <div className={styles.informationContainer}>
                                <Accordion
                                  type={'plus'}
                                  customStyle={styles}
                                  title={'caracteristicas'}
                                >
                                  <p className={styles.information}>
                                    {sampleProduct.characteristics}
                                  </p>
                                </Accordion>
                                <Accordion
                                    type={'plus'}
                                    customStyle={styles}
                                    title={'Cuidados'}
                                >
                                    <p className={styles.information}>
                                        {sampleProduct.care}
                                    </p>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                    {/*other products photo links*/}
                    {/*<div className={styles.suggestionContainer}>*/}
                    {/*  <h2>You may also like</h2>*/}
                    {/*  <ProductCardGrid*/}
                    {/*    spacing*/}
                    {/*    showSlider*/}
                    {/*    height={400}*/}
                    {/*    columns={4}*/}
                    {/*    data={suggestions}*/}
                    {/*  />*/}
                    {/*</div>*/}
                </Container>

                {/* Bottom banner}
    {/*<div className={styles.attributeContainer}>*/}
                {/*  <Split*/}
                {/*    image={'/cloth.png'}*/}
                {/*    alt={'attribute description'}*/}
                {/*    title={'Sustainability'}*/}
                {/*    description={*/}
                {/*      'We design our products to look good and to be used on a daily basis. And our aim is to inspire people to live with few timeless objects made to last. This is why quality over quantity is a cornerstone of our ethos and we have no interest in trends or seasonal collections.'*/}
                {/*    }*/}
                {/*    ctaText={'learn more'}*/}
                {/*    cta={() => navigate('/blog')}*/}
                {/*    bgColor={'var(--standard-light-grey)'}*/}
                {/*  />*/}
                {/*</div>*/}
            </div>
        </Layout>
    );
};

export default ProductPage
