import Carousel from '../../components/Carousel'
import React from 'react'
import Campaigns from '../../components/ui/Campaigns'
import MenuWrapper from '../../components/product/MenuWrapper';
import About from '../../components/ui/About';
import Reservation from '@/components/Reservation';

export default function Home() {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
    </div>
  );
};
