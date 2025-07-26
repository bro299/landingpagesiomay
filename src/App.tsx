import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Quality from './components/Quality';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import PartyOrders from './components/PartyOrders';
import OrderProcess from './components/OrderProcess';
import Testimonials from './components/Testimonials';
import Branches from './components/Branches';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-secondary-900">
      <Navigation />
      <Hero />
      <Stats />
      <Quality />
      <Gallery />
      <WhyChooseUs />
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
