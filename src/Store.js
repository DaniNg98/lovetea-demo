import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import love6 from './Images/love6.jpg';
import love7 from './Images/love7.JPG';
import love8 from './Images/love8.JPG';
import love9 from './Images/love9.JPG';
import love10 from './Images/love10.JPG';
import love11 from './Images/love11.jpg';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 600, itemsToShow: 2, itemsToScroll: 2 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 3 },
];

const Store = () => {
  return (
    <section id='Our Store'>
      <div className='App'>
        <div className='store-header'>
          <p className='store-font'>Our Store</p>
        </div>
        <div className='carousel-wrapper'>
          <Carousel breakPoints={breakPoints}>
            <Item key='1'>
              <img src={love6} className='carousel-pics' />
            </Item>
            <Item key='2'>
              <img src={love7} className='carousel-pics' />
            </Item>
            <Item key='3'>
              <img src={love8} className='carousel-pics' />
            </Item>
            <Item key='4'>
              <img src={love9} className='carousel-pics' />
            </Item>
            <Item key='5'>
              <img src={love10} className='carousel-pics' />
            </Item>
            <Item key='6'>
              <img src={love11} className='carousel-pics' />
            </Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Store;
