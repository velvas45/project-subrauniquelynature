import React from 'react';

// components
import Home from './Home';
import Product from './Product';
import About from './About';
import Contact from './Contact';

function LandingPage({ dataProducts }) {
  return (
    <>
      <Home />
      <Product dataProducts={dataProducts} />
      <About />
      <Contact />
    </>
  );
}

export default LandingPage;
