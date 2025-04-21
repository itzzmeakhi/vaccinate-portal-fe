import React from 'react';

import Template from '../Template/Template';
import Hero from '../../components/Hero/Hero';
import Gallery from '../../components/Gallery/Gallery';
import Contact from '../../components/Contact/Contact';

import './HomePage.scss';

const HomePage = () => {

  // Data for image carousel

  const imagesSet1 = [
    "/src/assets/gallery1.jpg",
    "/src/assets/gallery2.jpg",
    "/src/assets/gallery3.jpg",
    "/src/assets/gallery4.jpg",
    "/src/assets/gallery5.jpg",
    "/src/assets/gallery6.jpg",
  ];

  const imagesSet2 = [
    "/src/assets/gallery7.jpg",
    "/src/assets/gallery8.jpg",
    "/src/assets/gallery9.jpg",
    "/src/assets/gallery10.jpg",
    "/src/assets/gallery11.jpg",
    "/src/assets/gallery12.jpg",
  ];

  return (
    <div className='home-page'>
      <Template>
        <Hero />
        <Gallery images={imagesSet1} />
        <Gallery images={imagesSet2} />
        <Contact />
      </Template>
    </div>
  );
};

export default HomePage;