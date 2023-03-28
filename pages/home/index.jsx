import Carousel from '../../components/Carousel'
import React from 'react'
import Campaigns from '../../components/ui/Campaigns'
import MenuWrapper from '../../components/product/MenuWrapper';

export default function Home() {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
    </div>
  );
};
