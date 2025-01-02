import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: 'Siomay Original',
    price: 'Rp 5.000/pc',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=500'
  },
  {
    name: 'Tahu Krispi',
    price: 'Rp 4.000/pc',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500'
  },
  {
    name: 'Batagor',
    price: 'Rp 5.000/pc',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=500'
  },
  {
    name: 'Bakso',
    price: 'Rp 12.000/porsi',
    image: 'https://images.unsplash.com/photo-1583064253378-31cc3dad7576?auto=format&fit=crop&w=500'
  },
  {
    name: 'Es Kopyor',
    price: 'Rp 8.000/gelas',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500'
  }
];

const Products = () => {
  const productsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.product-card', {
        scrollTrigger: {
          trigger: '.products-container',
          start: 'top center',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
      });
    }, productsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="menu" ref={productsRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm uppercase tracking-wider font-medium">Menu Kami</span>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mt-4 mb-6">
            Menu Favorit
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="products-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-card group relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-amber-200 font-medium">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;