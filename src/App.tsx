import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Quality from './components/Quality';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import About from './components/About';
import PartyOrders from './components/PartyOrders';
import OrderProcess from './components/OrderProcess';
import Testimonials from './components/Testimonials';
import Branches from './components/Branches';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-amber-50 pt-16">
      <Navigation />
      <Hero />
      <Quality />
      <Products />
      <WhyChooseUs />
      <Gallery />
      <About />
      <PartyOrders />
      <OrderProcess />
      <Testimonials />
      <Branches />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;