import Carousel from '../../components/Carousel'
import React from 'react'
import Campaigns from '../../components/ui/Campaigns'
import MenuWrapper from '../../components/product/MenuWrapper';
import About from '../../components/ui/About';
import Reservation from '@/components/Reservation';
import Customers from '@/components/customers/Customers';

export default function Home({categoryList, productList }) {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper categoryList={categoryList} productList={productList } />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};


